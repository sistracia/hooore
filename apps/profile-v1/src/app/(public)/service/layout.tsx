import { CTA } from "@/components/cta";
import { Divider } from "@repo/components-v1/divider";

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Divider />
      <CTA />
    </>
  );
}
