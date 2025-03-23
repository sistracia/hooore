import { readdir } from "node:fs/promises";

function clearExtensions(fileName) {
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex === -1 ? fileName : fileName.slice(0, lastDotIndex);
}

async function modifyFormRenderer(plop) {
  const lines = ['import type { FormFields } from "./types";'];

  const files = await readdir(
    "apps/dashboard/src/components/components-form/content-schemas"
  );
  for (const file of files) {
    const cleanFileName = clearExtensions(file);
    lines.push(
      `import { ${plop.getHelper("constantCase")(
        cleanFileName
      )}_SCHEMA } from "./content-schemas/${cleanFileName}";`
    );
  }

  lines.push("");
  lines.push("export const SCHEMAS = [");
  for (const file of files) {
    const cleanFileName = clearExtensions(file);
    lines.push(`${plop.getHelper("constantCase")(cleanFileName)}_SCHEMA,`);
  }
  lines.push("] satisfies FormFields[];");

  return lines.join("\n");
}

export function formTemplate(plop) {
  plop.setGenerator("form-template", {
    description: "Create new form template",
    prompts: [
      {
        type: "input",
        name: "templateName",
        message: "What is the name of the new content template?",
        validate: (input) => {
          if (!new RegExp(/^[A-Za-z0-9 ]+$/).test(input)) {
            return "template name should pass the [A-Za-z0-9 ] pattern";
          }
          return true;
        },
      },
    ],
    actions: (data) => {
      const name = data
        ? plop.getHelper("pascalCase")(data.templateName).replace(/_/g, "")
        : "Foo";

      return [
        {
          type: "add",
          data: { name },
          path: "apps/dashboard/src/components/components-form/content-schemas/{{ dashCase templateName }}-form.tsx",
          templateFile: "templates/form-template.hbs",
        },
        {
          type: "modify",
          path: "apps/dashboard/src/components/components-form/form-renderer-schemas.ts",
          async transform() {
            return await modifyFormRenderer(plop);
          },
        },
      ];
    },
  });
}
