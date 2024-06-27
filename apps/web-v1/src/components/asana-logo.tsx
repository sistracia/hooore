import Image, { ImageProps } from "next/image";

export function AsanaLogo(props: Omit<ImageProps, "src">) {
  return <Image src="/asana-logo.svg" {...props} />;
}
