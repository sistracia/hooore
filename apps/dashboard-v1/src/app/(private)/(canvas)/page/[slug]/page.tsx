import { validateRequest } from "@/lib/auth";
import PageEditForm from "./form";
import { redirect } from "next/navigation";

export default async function PageEditPate() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return <PageEditForm />;
}
