import { Chip } from "@/components/chip";
import { Hero } from "@/components/hero";
import { Paragraph } from "@/components/paragraph";
import { Divider } from "@/components/divider";
import { BackgroundColor } from "@/components/background-color";
import { getPrivacyPolicy } from "@/actions/privacy-policy";
import { redirect } from "next/navigation";

export default async function PrivacyPolicyPage() {
  const privacyPolicy = await getPrivacyPolicy();

  if (!privacyPolicy) {
    return redirect("/not-found");
  }

  return (
    <BackgroundColor color="var(--black-mamba-400)">
      <Hero
        header={<Chip>Privacy Policy</Chip>}
        title={privacyPolicy.title}
        footer={
          <p className="ss-font-medium">
            {privacyPolicy.last_updated.toString()}
          </p>
        }
      />
      <Divider />
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
    </BackgroundColor>
  );
}
