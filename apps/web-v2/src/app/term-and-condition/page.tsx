import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import termCondition from "../../data/term-and-condition";
import { Paragraph } from "@/components/paragraph";
import { Divider } from "@/components/divider";

export default function TermAndConditionPage() {
  return (
    <>
      <Hero
        header={<Chip>Term & Condition</Chip>}
        title={termCondition.title}
      />
      <Divider />
      <main className="ss-flex ss-flex-col ss-gap-10 ss-px-4 ss-py-10 sm:ss-max-w-[70vw] sm:ss-px-10 sm:ss-py-10">
        {termCondition.contents.map((termCondition, termConditionIndex) => {
          return (
            <Paragraph
              as="article"
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
