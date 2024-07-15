import { PageScroll } from "@repo/smooth-scroll/react/page-scroll";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/nav-bar";
import { Suspense } from "react";
import { Toaster } from "@/components/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Divider } from "@/components/divider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      <PageScroll>
        {children}
        <Divider height={4} />
        <Footer />
      </PageScroll>
      <Toaster />
      <Analytics />
    </>
  );
}
