import { getTemplates } from "@/actions/template";
import { TemplateOptionsForm } from "./form";

export default async function TemplateOptionsStep() {
  const templates = await getTemplates();
  return <TemplateOptionsForm templates={templates} />;
}
