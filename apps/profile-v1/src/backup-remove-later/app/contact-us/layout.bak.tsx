import { BackgroundColor } from "@/backup-remove-later/components/background-color";

export default function ContactUsLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const { children } = props;
  return (
    <BackgroundColor color="var(--purple-widow-900)">
      {children}
    </BackgroundColor>
  );
}
