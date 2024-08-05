"use client";

import { SetupLayout } from "@/components/setup-layout";
import { SocialMediaFields } from "@/components/social-media-fields";

const noop = () => {
  return undefined;
};

export default function SocialNetworkStep() {
  return (
    <div className="dd-flex dd-h-full dd-items-center">
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={noop}
        onNext={noop}
        badge="Social Network"
        title="How people contact you?"
        nextButtonText="Save & Proceed"
      >
        <SocialMediaFields />
      </SetupLayout>
    </div>
  );
}
