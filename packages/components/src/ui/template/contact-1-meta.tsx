import type { Contact1Slug } from "../../types/template-types/contact-1";
import type { ComponentRenderer } from "../types";
import { Contact1, type Contact1RendererProps } from "./contact-1";

export const CONTACT_1_META: ComponentRenderer<
  Contact1Slug,
  Contact1RendererProps
> = {
  slug: "contact-1",
  component: Contact1,
};
