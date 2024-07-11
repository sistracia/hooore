"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Intersection } from "@splidejs/splide-extension-intersection";
import { Children } from "react";

export type MarqueeProps = {
  children?: React.ReactNode;
};

export function Marquee({ children }: MarqueeProps) {
  const options = {
    type: "loop",
    focus: "center",
    gap: "50px",
    drag: false,
    autoWidth: true,
    rewind: false,
    pagination: false,
    arrows: false,
    autoScroll: {
      autoStart: false,
      speed: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    intersection: {
      rootMargin: "30%",
      inView: {
        autoScroll: true,
      },
      outView: {
        autoScroll: false,
      },
    },
  };

  return (
    <div className="ss-h-full ss-w-full">
      <Splide
        options={options}
        hasTrack={false}
        extensions={{ AutoScroll, Intersection }}
        className="ss-h-full"
      >
        <SplideTrack className="ss-h-full">
          {Children.map(children, (child, childIndex) => {
            return <SplideSlide key={childIndex}>{child}</SplideSlide>;
          })}
        </SplideTrack>
      </Splide>
    </div>
  );
}
