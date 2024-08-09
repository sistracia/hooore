import { BackgroundColor } from "@/backup-remove-later/components/background-color";

export default function BlogLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const { children } = props;
  return (
    <BackgroundColor color="var(--black-mamba-400)">{children}</BackgroundColor>
  );
}
