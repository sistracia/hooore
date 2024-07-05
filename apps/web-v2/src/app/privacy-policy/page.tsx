import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import privacyPolicyJSON from "../data/privacy-policy.json";
import { Paragraph as ParagraphType } from "@/types/paragraph";
import { Paragraph } from "@/components/paragraph";

const privacyPolicies = privacyPolicyJSON as ParagraphType[];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero header={<Chip>Term & Condition</Chip>} title="Term & Condition" />
      <main className="ss-flex ss-flex-col ss-gap-10 ss-p-10">
        {privacyPolicies.map((privacyPolicy, privacyPolicyIndex) => {
          return (
            <Paragraph
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
