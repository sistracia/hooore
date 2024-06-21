import Image from "next/image";
import { HooOre } from "./hooore";

export function PhotoCard() {
  return (
    <div className="flex h-64 w-8/12 -rotate-6 flex-col rounded-3xl bg-white p-[24px] shadow-[13px_24px_0px_0px_rgba(0,0,0)] sm:h-fit sm:w-fit">
      <Image
        src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ongoing Construction"
        width={750}
        height={475}
        className="flex-1 rounded-3xl object-cover"
      />
      <HooOre
        width="162"
        height="65"
        viewBox="0 0 162 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-4 mt-4 h-fit w-4/12 sm:h-16"
      />
    </div>
  );
}
