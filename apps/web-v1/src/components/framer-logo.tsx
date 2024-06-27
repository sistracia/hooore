import Image, { ImageProps } from "next/image";

export function FramerLogo(props: Omit<ImageProps, "src">) {
  return <Image src="/framer-logo.svg" {...props} />;
}
