export function EvernoteLogo(
  props: Omit<React.ComponentPropsWithRef<"img">, "src">,
) {
  return <img src="/evernote-logo.svg" {...props} />;
}
