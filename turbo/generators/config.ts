import { PlopTypes } from "@turbo/gen";

import { tsPackage } from "./ts-package";
import { reactTSPackage } from "./react-ts-package";
import { nextTSApp } from "./next-ts-app";
import { contentTemplate } from "./content-template";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("upperCase", function (text) {
    return text.toUpperCase();
  });
  tsPackage(plop);
  reactTSPackage(plop);
  nextTSApp(plop);
  contentTemplate(plop);
}
