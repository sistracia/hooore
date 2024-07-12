import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import { Paragraph } from "@/components/paragraph";
import { Divider } from "@/components/divider";
import { getTermAndCondition } from "@/actions/term-and-condition";
import { redirect } from "next/navigation";
import { BackgroundColor } from "@/components/background-color";

export default async function TermAndConditionPage() {
  const termCondition = await getTermAndCondition();

  if (!termCondition) {
    return redirect("/not-found");
  }

  return (
    <BackgroundColor color="var(--black-mamba-400)">
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
    </BackgroundColor>
  );
}
