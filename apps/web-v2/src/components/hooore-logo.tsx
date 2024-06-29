export function HoooreLogo(
  props: Omit<React.ComponentPropsWithRef<"img">, "src">,
) {
  return <img src="/hooore-logo.svg" alt="Hooore Logo" {...props} />;
}
