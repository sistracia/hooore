import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";

export default function TermAndConditionPage() {
  return (
    <>
      <Hero
        header={<Chip>Privacy Policy</Chip>}
        title="Privacy Policy"
        description="Last Updated: July 1, 2024"
      />
    </>
  );
}
