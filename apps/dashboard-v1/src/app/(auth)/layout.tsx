import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return <>{children}</>;
}
