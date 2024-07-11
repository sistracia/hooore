import "@splidejs/react-splide/css/core";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageScroll } from "@repo/smooth-scroll/react/page-scroll";
import { cn } from "@repo/utils";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/nav-bar";
import { Suspense } from "react";
import { Toaster } from "@/components/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Divider } from "@/components/divider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hooore",
  description: "Turning Tech Dreams into Happy Realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "ss-bg-page-background")}>
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
      </body>
    </html>
  );
}
