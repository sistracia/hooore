import Image, { ImageProps } from "next/image";

export function AirbnbLogo(props: Omit<ImageProps, "src">) {
  return <Image src="/airbnb-logo.svg" {...props} />;
}
