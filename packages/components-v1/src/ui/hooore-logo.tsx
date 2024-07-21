export function HoooreLogo(
  props: Omit<React.ComponentPropsWithRef<"img">, "src">,
) {
  return (
    <img
      src="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777773/hooore-web-profile/hooore-logo.svg"
      alt="Hooore Logo"
      {...props}
    />
  );
}
