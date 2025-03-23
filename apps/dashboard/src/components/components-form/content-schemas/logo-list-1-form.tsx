import type {
  LogoList1Props,
  LogoList1Slug,
} from "@hooore/components/types/template-types/logo-list-1";
import type { FormFields } from "../types";

export const LOGO_LIST_1_FORM_SCHEMA: FormFields<
  LogoList1Slug,
  LogoList1Props
> = {
  slug: "logo-list-1",
  fields: [
    {
      type: "field-array",
      name: "images",
      addFieldText: "Add Logo",
      labelPrefix: "Logo",
      fields: [
        {
          type: "input-file",
          name: "image",
        },
      ],
    },
  ],
};
