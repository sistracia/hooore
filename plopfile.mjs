import { contentTemplate } from "./templates/content-template.mjs";
import { formTemplate } from "./templates/form-template.mjs";

export default function generator(plop) {
  plop.setHelper("upperCase", function (text) {
    return text.toUpperCase();
  });
  contentTemplate(plop);
  formTemplate(plop);
}
