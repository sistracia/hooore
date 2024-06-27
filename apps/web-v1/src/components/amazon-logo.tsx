import Image, { ImageProps } from "next/image";

export function AmazonLogo(props: Omit<ImageProps, "src">) {
  return <Image src="/amazon-logo.svg" {...props} />;
}
