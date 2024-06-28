export function FramerLogo(
  props: Omit<React.ComponentPropsWithRef<"img">, "src">,
) {
  return <img src="/framer-logo.svg" {...props} />;
}
