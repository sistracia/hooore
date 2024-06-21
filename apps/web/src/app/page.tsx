import { HooOre } from "@/components/hooore";
import { PageTransition } from "@/components/page-transition";
import { PhotoCard } from "@/components/photo-card";
import { ScrollContainer } from "@/components/scroll-container";
import { Suspense } from "react";

function Content() {
  return (
    <main className="relative flex h-dvh flex-col items-center justify-center bg-[#EABE11]">
      <PhotoCard />
      <div className="mt-12 flex items-center justify-center sm:absolute">
        <p className="w-full text-center text-[32px] font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0)] sm:text-[80px]">
          <span className="inline-block">
            Something awesome is coming soon.
          </span>
          <span className="inline-block">Be first to know.</span>
        </p>
      </div>
    </main>
  );
}
export default function Page() {
  return (
    <>
      <Suspense>
        <PageTransition className="items-center justify-center bg-white">
          <HooOre
            width="1000"
            height="500"
            viewBox="0 0 162 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#EABE11]"
          />
        </PageTransition>
      </Suspense>
      <ScrollContainer>
        <Content />
        <Content />
      </ScrollContainer>
    </>
  );
}
