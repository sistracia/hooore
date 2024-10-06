import type { Contact2Slug } from "../../types/template-types/contact-2";
import type { ComponentRenderer } from "../types";
import { Contact2, type Contact2RendererProps } from "./contact-2";

export const CONTACT_2_META: ComponentRenderer<
  Contact2Slug,
  Contact2RendererProps
> = {
  slug: "contact-2",
  component: Contact2,
};
