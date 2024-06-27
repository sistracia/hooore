import Image, { ImageProps } from "next/image";

export function EvernoteLogo(props: Omit<ImageProps, "src">) {
  return <Image src="/evernote-logo.svg" {...props} />;
}
