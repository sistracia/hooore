import { cn } from "@repo/utils";
import type { LogoList1Props } from "../types/logo-list-1";
import { Marquee } from "./common/marquee";

export function LogoList1(
  props: LogoList1Props & { className?: string; disableAnimation?: boolean },
) {
  const { images, className, disableAnimation = false } = props;

  return (
    <section className={cn("pc-h-[150px] pc-py-6", className)}>
      <Marquee width="350px" disabled={disableAnimation}>
        {(images || []).map((logo, logoIndex) => {
          return (
            <div
              key={logoIndex}
              className="pc-flex pc-h-full pc-items-center pc-justify-center"
            >
              <img src={logo?.image} className="pc-h-full pc-object-contain" />
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
