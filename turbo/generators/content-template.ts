import { PlopTypes } from "@turbo/gen";
import { execSync } from "node:child_process";
import { readdir } from "node:fs/promises";

function throwIfComponentExist(name: string, file: string) {
  if (file.includes(name)) {
    throw new Error("Component already exist.");
  }
}

function getNameWithoutNumber(name: string) {
  return name.replace(new RegExp("[0-9]", "g"), "");
}

type NewFileMeta = {
  lines: string[];
  isImportGroupExist: boolean;
  isImportAlreadyInserted: boolean;
  isBodyGroupExist: boolean;
  isBodyAlreadyInserted: boolean;
  isTypeGroupExist: boolean;
  isTypeSection: boolean;
  isTypeAlreadyInserted: boolean;
};

function clearExtensions(fileName: string) {
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex === -1 ? fileName : fileName.slice(0, lastDotIndex);
}

async function modifyPageCotent(plop: PlopTypes.NodePlopAPI) {
  const files = await readdir("packages/components/src/types/template-types");

  const lines: string[] = [];

  for (const file of files) {
    const cleanFileName = clearExtensions(file);
    const pascalFileName = plop
      .getHelper("pascalCase")(cleanFileName)
      .replaceAll("_", "");
    lines.push(
      `import type { ${pascalFileName}Props, ${pascalFileName}Slug } from "./template-types/${cleanFileName}"`,
    );
  }

  lines.push("");
  for (const file of files) {
    const cleanFileName = clearExtensions(file);
    const pascalFileName = plop
      .getHelper("pascalCase")(cleanFileName)
      .replaceAll("_", "");
    lines.push(`export type ${pascalFileName}Component = {`);
    lines.push(`  slug: ${pascalFileName}Slug;`);
    lines.push(`  content: ${pascalFileName}Props;`);
    lines.push("};");
    lines.push("");
  }

  lines.push("export type PageContentComponentProps =");
  for (const file of files) {
    const cleanFileName = clearExtensions(file);
    const pascalFileName = plop
      .getHelper("pascalCase")(cleanFileName)
      .replaceAll("_", "");
    lines.push(`  | ${pascalFileName}Component`);
  }

  lines.push("");
  lines.push(
    'export type PageContentComponentSlug = PageContentComponentProps["slug"];',
  );
  lines.push(
    'export type PageContentComponentContent = PageContentComponentProps["content"];',
  );
  lines.push("");
  lines.push(
    "export type PageContent = { id: string } & PageContentComponentProps;",
  );
  lines.push("");

  return lines.join("\n");
}

async function modifyPageRenderer(plop: PlopTypes.NodePlopAPI) {
  const lines: string[] = [
    'import type { PageContentComponentSlug } from "../types/page-content";',
    'import type { ComponentRenderer, PageRendererComponentProps } from "./types";',
  ];

  const files = await readdir("packages/components/src/ui/template");
  for (const file of files) {
    const cleanFileName = clearExtensions(file);
    lines.push(
      `import { ${plop.getHelper("constantCase")(cleanFileName)}_META } from "./template/${cleanFileName}"`,
    );
  }

  lines.push("");
  lines.push("export const COMPONENTS = [");
  for (const file of files) {
    const cleanFileName = clearExtensions(file);
    lines.push(`  ${plop.getHelper("constantCase")(cleanFileName)}_META,`);
  }
  lines.push("] satisfies ComponentRenderer<");
  lines.push("  PageContentComponentSlug,");
  lines.push("  PageRendererComponentProps");
  lines.push(">[];");
  lines.push("");

  return lines.join("\n");
}

function modifyFormRenderer(name: string, dashCaseName: string, file: string) {
  throwIfComponentExist(name, file);

  const defaultNewFileMeta: NewFileMeta = {
    lines: [],
    isImportGroupExist: false,
    isImportAlreadyInserted: false,
    isBodyGroupExist: false,
    isBodyAlreadyInserted: false,
    isTypeGroupExist: false,
    isTypeSection: false,
    isTypeAlreadyInserted: false,
  };

  const nameWithoutNumber = getNameWithoutNumber(name);
  const dashNameWithoutNumber = getNameWithoutNumber(dashCaseName);

  const newFileMeta = file
    .split("\n")
    .reduce<NewFileMeta>((newFileMeta, line) => {
      const trimedLine = line.trim();

      // Import
      const importGroupExist = trimedLine.startsWith(
        `import { ${nameWithoutNumber}`,
      );

      const isComponentImportGroupExist =
        newFileMeta.isImportGroupExist &&
        !importGroupExist &&
        trimedLine.startsWith("import {");

      const isComponentImportGroupNotExist =
        !newFileMeta.isImportGroupExist && trimedLine === "";

      if (
        !newFileMeta.isImportAlreadyInserted &&
        (isComponentImportGroupExist || isComponentImportGroupNotExist)
      ) {
        newFileMeta.lines.push(
          `import { ${name}Form } from "./${dashCaseName}-form";`,
        );

        newFileMeta.isImportAlreadyInserted = true;
      }

      if (!newFileMeta.isImportGroupExist && importGroupExist) {
        newFileMeta.isImportGroupExist = true;
      }

      // Body
      const bodyGroupExist = trimedLine.startsWith(
        `if (props.slug === "${dashNameWithoutNumber}`,
      );

      const isComponentBodyGroupExist =
        newFileMeta.isBodyGroupExist &&
        !bodyGroupExist &&
        trimedLine.startsWith('if (props.slug === "');

      const isComponentBodyGroupNotExist =
        !newFileMeta.isBodyGroupExist && trimedLine.startsWith(`return null`);

      if (
        !newFileMeta.isBodyAlreadyInserted &&
        (isComponentBodyGroupExist || isComponentBodyGroupNotExist)
      ) {
        newFileMeta.lines.push(`  if (props.slug === "${dashCaseName}") {`);
        newFileMeta.lines.push(`    return (`);
        newFileMeta.lines.push(`      <${name}Form`);
        newFileMeta.lines.push(`        projectId={props.projectId}`);
        newFileMeta.lines.push(`        slug={props.slug}`);
        newFileMeta.lines.push(`        content={props.content}`);
        newFileMeta.lines.push(`        onChange={props.onChange}`);
        newFileMeta.lines.push(`      />`);
        newFileMeta.lines.push(`    );`);
        newFileMeta.lines.push(`  }\n`);

        newFileMeta.isBodyAlreadyInserted = true;
      }

      if (!newFileMeta.isBodyGroupExist && bodyGroupExist) {
        newFileMeta.isBodyGroupExist = true;
      }

      newFileMeta.lines.push(line);

      return newFileMeta;
    }, defaultNewFileMeta);

  return file;
}

export function contentTemplate(plop: PlopTypes.NodePlopAPI) {
  plop.setGenerator("content-template", {
    description: "Create new content template",
    prompts: [
      {
        type: "input",
        name: "templateName",
        message: "What is the name of the new content template?",
        validate: (input: string) => {
          if (!new RegExp(/^[A-Za-z0-9 ]+$/).test(input)) {
            return "template name should pass the [A-Za-z0-9 ] pattern";
          }
          return true;
        },
      },
    ],
    actions: (data) => {
      let name = "Foo";
      let dashCaseName = name;
      let constantCaseName = name;

      if (data) {
        const templateName = data.templateName;
        dashCaseName = plop.getHelper("dashCase")(templateName);
        constantCaseName = plop.getHelper("constantCase")(templateName);
        name = plop.getHelper("pascalCase")(templateName).replace(/_/g, "");
      }

      return [
        {
          type: "add",
          data: { name },
          path: "packages/components/src/ui/template/{{ dashCase templateName }}.tsx",
          templateFile: "templates/content-template-component.hbs",
        },
        {
          type: "add",
          data: { name },
          path: "apps/dashboard/src/components/components-form/{{ dashCase templateName }}-form.tsx",
          templateFile: "templates/content-template-form.hbs",
        },
        {
          type: "add",
          data: { name },
          path: "packages/components/src/types/template-types/{{ dashCase templateName }}.ts",
          templateFile: "templates/content-template-type.hbs",
        },
        {
          type: "modify",
          path: "packages/components/src/types/page-content.ts",
          async transform() {
            return await modifyPageCotent(plop);
          },
        },
        {
          type: "modify",
          path: "packages/components/src/ui/page-renderer-components.ts",
          async transform() {
            return await modifyPageRenderer(plop);
          },
        },
        {
          type: "modify",
          path: "apps/dashboard/src/components/components-form/form-renderer.tsx",
          async transform(template) {
            return modifyFormRenderer(name, dashCaseName, template);
          },
        },
        function customAction() {
          execSync(`pnpm prettier . --write --ignore-unknown`);
          return "New content template added";
        },
      ];
    },
  });
}
