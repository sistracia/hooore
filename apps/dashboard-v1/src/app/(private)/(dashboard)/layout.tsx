import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PrivateLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const { children } = props;
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return children;
}
