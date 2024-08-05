"use client";

import { Button } from "@/components/ui/button";
import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { SetupLayout } from "@/components/setup-layout";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/card";

const noop = () => {
  return undefined;
};

export default function ProjectTemplateStep() {
  return (
    <div className="dd-flex dd-h-full dd-items-center">
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={noop}
        badge="Social Network"
        title="Choose how to design your site"
      >
        <div className="dd-w-full">
          <ComingSoonOverlay
            as={Card}
            className="dd-mb-3 dd-flex dd-items-center"
          >
            <CardContent
              title="Start from template"
              description="Create your site from popular design."
              action={
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="dd-mr-2"
                  onClick={noop}
                >
                  <ArrowRightIcon className="dd-h-5 dd-w-5" />
                </Button>
              }
            />
          </ComingSoonOverlay>
          <ComingSoonOverlay
            as={Card}
            className="dd-mb-3 dd-flex dd-items-center"
          >
            <CardContent
              title="Start from blank canvas"
              description="Turn your business idea into lovely site."
              action={
                <Button
                  type="submit"
                  variant="outline"
                  size="icon"
                  className="dd-mr-2"
                >
                  <ArrowRightIcon className="dd-h-5 dd-w-5" />
                </Button>
              }
            />
          </ComingSoonOverlay>
        </div>
      </SetupLayout>
    </div>
  );
}
