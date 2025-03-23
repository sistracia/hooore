import { getCurrentSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function PrivateLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const { children } = props;
  const { session } = await getCurrentSession();
  if (!session) {
    return redirect("/login");
  }

  return children;
}
