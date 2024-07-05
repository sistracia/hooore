import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import privacyPolicyJSON from "../data/privacy-policy.json";
import { Paragraph as ParagraphType } from "@/types/paragraph";
import { Paragraph } from "@/components/paragraph";

const privacyPolicy = privacyPolicyJSON as {
  title: string;
  last_updated: string;
  contents: ParagraphType[];
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        header={<Chip>Privacy Policy</Chip>}
        title={privacyPolicy.title}
        footer={<p className="ss-font-medium">{privacyPolicy.last_updated}</p>}
      />
      <main className="ss-flex ss-flex-col ss-gap-10 ss-px-4 ss-py-10 sm:ss-max-w-[70vw] sm:ss-px-10 sm:ss-py-10">
        {privacyPolicy.contents.map((privacyPolicy, privacyPolicyIndex) => {
          return (
            <Paragraph
              as="article"
              key={privacyPolicyIndex}
              title={privacyPolicy.title}
              contents={privacyPolicy.contents}
            />
          );
        })}
      </main>
    </>
  );
}
