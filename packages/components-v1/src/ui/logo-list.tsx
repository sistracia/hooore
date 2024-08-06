import { cn } from "@repo/utils";
import { LogoListProps } from "../types/logo-list";
import { Marquee } from "./marquee";

export function LogoList(props: LogoListProps & { className?: string }) {
  const { images, className } = props;

  return (
    <section className={cn("pc-h-[150px] pc-py-6", className)}>
      <Marquee width="350px">
        {(images || []).map((logo, logoIndex) => {
          return (
            <div
              key={logoIndex}
              className="pc-flex pc-h-full pc-items-center pc-justify-center"
            >
              <img src={logo} className="pc-h-full pc-object-contain" />
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
