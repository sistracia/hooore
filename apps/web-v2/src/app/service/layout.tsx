import { CTA } from "@/components/cta";

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <CTA />
    </>
  );
}
