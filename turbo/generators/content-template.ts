import { PlopTypes } from "@turbo/gen";
import { execSync } from "node:child_process";

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

function modifyPageCotent(
  pascalCaseName: string,
  dashCaseName: string,
  file: string,
) {
  throwIfComponentExist(pascalCaseName, file);

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

  const pascalNameWithoutNumber = getNameWithoutNumber(pascalCaseName);
  //   const dashNameWithoutNumber = getNameWithoutNumber(dashCaseName);

  const newFileMeta = file
    .split("\n")
    .reduce<NewFileMeta>((newFileMeta, line) => {
      const trimedLine = line.trim();

      // Import
      const importGroupExist = trimedLine.startsWith(
        `import type { ${pascalNameWithoutNumber}`,
      );

      const isComponentImportGroupExist =
        newFileMeta.isImportGroupExist &&
        !importGroupExist &&
        trimedLine.startsWith("import type {");

      const isComponentImportGroupNotExist =
        !newFileMeta.isImportGroupExist && trimedLine === "";

      if (
        !newFileMeta.isImportAlreadyInserted &&
        (isComponentImportGroupExist || isComponentImportGroupNotExist)
      ) {
        newFileMeta.lines.push(
          `import type { ${pascalCaseName}Props, ${pascalCaseName}Slug } from "./${dashCaseName}";`,
        );

        newFileMeta.isImportAlreadyInserted = true;
      }

      if (!newFileMeta.isImportGroupExist && importGroupExist) {
        newFileMeta.isImportGroupExist = true;
      }

      // Body
      const bodyGroupExist = trimedLine.startsWith(
        `export type ${pascalNameWithoutNumber}`,
      );

      const isComponentBodyGroupExist =
        newFileMeta.isBodyGroupExist &&
        !bodyGroupExist &&
        trimedLine.startsWith("export type");

      const isComponentBodyGroupNotExist =
        !newFileMeta.isBodyGroupExist &&
        trimedLine.startsWith("export type PageContentComponentProps =");

      if (
        !newFileMeta.isBodyAlreadyInserted &&
        (isComponentBodyGroupExist || isComponentBodyGroupNotExist)
      ) {
        newFileMeta.lines.push(`export type ${pascalCaseName}Component = {`);
        newFileMeta.lines.push(`  slug: ${pascalCaseName}Slug;`);
        newFileMeta.lines.push(`  content: ${pascalCaseName}Props;`);
        newFileMeta.lines.push(`}\n`);

        newFileMeta.isBodyAlreadyInserted = true;
      }

      if (!newFileMeta.isBodyGroupExist && bodyGroupExist) {
        newFileMeta.isBodyGroupExist = true;
      }

      // Type
      const typeGroupExist =
        trimedLine.startsWith(`| ${pascalNameWithoutNumber}`) &&
        trimedLine.endsWith(`Component`);

      const isComponentTypeGroupExist =
        newFileMeta.isTypeGroupExist &&
        !typeGroupExist &&
        trimedLine.startsWith("| ") &&
        trimedLine.endsWith("Component");

      const insertedLine = `  | ${pascalCaseName}Component`;
      if (
        newFileMeta.isTypeGroupExist &&
        !newFileMeta.isTypeAlreadyInserted &&
        isComponentTypeGroupExist
      ) {
        newFileMeta.lines.push(insertedLine);
        newFileMeta.isTypeAlreadyInserted = true;
      }

      const isComponenttypeGroupNotExist =
        newFileMeta.isTypeSection &&
        trimedLine.startsWith("| ") &&
        trimedLine.endsWith("Component;");

      if (!newFileMeta.isTypeAlreadyInserted && isComponenttypeGroupNotExist) {
        const tmpCurrentLine = line;
        line = insertedLine + ";";

        newFileMeta.lines.push(tmpCurrentLine.replace(";", ""));
        newFileMeta.isTypeAlreadyInserted = true;
      }

      if (!newFileMeta.isTypeGroupExist && typeGroupExist) {
        newFileMeta.isTypeGroupExist = true;
      }

      if (
        !newFileMeta.isTypeSection &&
        trimedLine.startsWith("export type PageContentComponentProps =")
      ) {
        newFileMeta.isTypeSection = true;
      }

      newFileMeta.lines.push(line);

      return newFileMeta;
    }, defaultNewFileMeta);

  return newFileMeta.lines.join("\n");
}

function modifyPageRenderer(
  pascalCaseName: string,
  dashCaseName: string,
  file: string,
) {
  throwIfComponentExist(pascalCaseName, file);

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

  const pascalNameWithoutNumber = getNameWithoutNumber(pascalCaseName);
  const dashNameWithoutNumber = getNameWithoutNumber(dashCaseName);

  const newFileMeta = file
    .split("\n")
    .reduce<NewFileMeta>((newFileMeta, line) => {
      const trimedLine = line.trim();

      // Import
      const importGroupExist = trimedLine.startsWith(
        `import { ${pascalNameWithoutNumber}`,
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
          `import { ${pascalCaseName} } from "./${dashCaseName}";`,
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
        newFileMeta.lines.push(`      <${pascalCaseName}`);
        newFileMeta.lines.push(`        {...props.content}`);
        newFileMeta.lines.push(
          `        disableAnimation={props.disableAnimation}`,
        );
        newFileMeta.lines.push(`        disableLink={props.disableLink}`);
        newFileMeta.lines.push(`        logo={props.projectLogo}`);
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

  return newFileMeta.lines.join("\n");
}

function modifyFormRenderer(
  pascalCaseName: string,
  dashCaseName: string,
  file: string,
) {
  throwIfComponentExist(pascalCaseName, file);

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

  const pascalNameWithoutNumber = getNameWithoutNumber(pascalCaseName);
  const dashNameWithoutNumber = getNameWithoutNumber(dashCaseName);

  const newFileMeta = file
    .split("\n")
    .reduce<NewFileMeta>((newFileMeta, line) => {
      const trimedLine = line.trim();

      // Import
      const importGroupExist = trimedLine.startsWith(
        `import { ${pascalNameWithoutNumber}`,
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
          `import { ${pascalCaseName}Form } from "./${dashCaseName}-form";`,
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
        newFileMeta.lines.push(`      <${pascalCaseName}Form`);
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

  return newFileMeta.lines.join("\n");
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
      let pascalCaseName = name;
      let dashCaseName = name;

      if (data) {
        name = data.templateName;
        dashCaseName = plop.getHelper("dashCase")(name);
        name = name.replace(/ /g, "");
        pascalCaseName = plop.getHelper("pascalCase")(name);
      }

      return [
        {
          type: "add",
          data: { name },
          path: "packages/components/src/ui/{{ dashCase templateName }}.tsx",
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
          path: "packages/components/src/types/{{ dashCase templateName }}.ts",
          templateFile: "templates/content-template-type.hbs",
        },
        {
          type: "modify",
          path: "packages/components/src/types/page-content.ts",
          async transform(template) {
            return modifyPageCotent(pascalCaseName, dashCaseName, template);
          },
        },
        {
          type: "modify",
          path: "packages/components/src/ui/page-renderer.tsx",
          async transform(template) {
            return modifyPageRenderer(pascalCaseName, dashCaseName, template);
          },
        },
        {
          type: "modify",
          path: "apps/dashboard/src/components/components-form/form-renderer.tsx",
          async transform(template) {
            return modifyFormRenderer(pascalCaseName, dashCaseName, template);
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
