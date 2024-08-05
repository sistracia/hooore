import { getTemplatesRepo } from "./template.repository";

export async function getTemplates() {
  return await getTemplatesRepo();
}
