import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PublicLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const { children } = props;
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return <>{children}</>;
}
