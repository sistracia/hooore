import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import privacyPolicyJSON from "../data/privacy-policy.json";
import { Paragraph as ParagraphType } from "@/types/paragraph";
import { Paragraph } from "@/components/paragraph";

const termConditions = privacyPolicyJSON as ParagraphType[];

export default function TermAndConditionPage() {
  return (
    <>
      <Hero
        header={<Chip>Privacy Policy</Chip>}
        title="Privacy Policy"
        description="Last Updated: July 1, 2024"
      />
      <main className="ss-flex ss-flex-col ss-gap-12 ss-p-10">
        {termConditions.map((termCondition, termConditionIndex) => {
          return (
            <Paragraph
              key={termConditionIndex}
              title={termCondition.title}
              contents={termCondition.contents}
            />
          );
        })}
      </main>
    </>
  );
}
