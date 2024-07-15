import { CTA } from "@/components/cta";
import { Divider } from "@/components/divider";

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
