import { Chip } from "@repo/components-v1/chip";
import { Hero } from "@repo/components-v1/hero";
import { Paragraph } from "@repo/components-v1/paragraph";
import { Divider } from "@repo/components-v1/divider";
import { getTermAndConditionAction } from "@/actions/term-and-condition";
import { redirect } from "next/navigation";
import { BackgroundColor } from "@/components/background-color";
import { OutlineText } from "@repo/components-v1/outline-text";

export default async function TermAndConditionPage() {
  const termCondition = await getTermAndConditionAction();

  if (!termCondition) {
    return redirect("/not-found");
  }

  return (
    <BackgroundColor color="var(--black-mamba-400)">
      <Hero
        header={<Chip>Term & Condition</Chip>}
        title={<OutlineText>{termCondition.title}</OutlineText>}
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
    </BackgroundColor>
  );
}
