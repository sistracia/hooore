import { BackgroundColor } from "@/components/background-color";
import { CTA } from "@/components/cta";
import { Divider } from "@repo/components-v1/divider";

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BackgroundColor color="var(--dan-brown-900)">
      {children}
      <Divider />
      <CTA />
    </BackgroundColor>
  );
}
