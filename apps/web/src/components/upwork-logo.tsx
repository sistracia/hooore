import Image, { ImageProps } from "next/image";

export function UpworkLogo(props: Omit<ImageProps, "src">) {
  return <Image src="/upwork-logo.svg" {...props} />;
}
