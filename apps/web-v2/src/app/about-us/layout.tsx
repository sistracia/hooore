import { CTA } from "@/components/cta";

export default function AboutUsLayout({
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
