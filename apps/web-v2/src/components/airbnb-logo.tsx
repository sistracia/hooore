export function AirbnbLogo(
  props: Omit<React.ComponentPropsWithRef<"img">, "src">,
) {
  return <img src="/airbnb-logo.svg" {...props} />;
}
