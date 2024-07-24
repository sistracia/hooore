"use client";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { cn } from "@repo/utils";
import { useRef, useState } from "react";

function StepLayout({
  title,
  badge,
  body,
  nextButtonText,
  nextButtonDisabled,
  className,
  onNext,
  onBack,
}: {
  title: string;
  badge: string;
  body: React.ReactNode;
  nextButtonText: string;
  nextButtonDisabled?: boolean;
  className?: string;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className={cn("dd-w-full sm:dd-w-[540px]", className)}>
      <div className="dd-mb-12">
        <Badge variant="outline">{badge}</Badge>
      </div>
      <div className="dd-mb-12">
        <h1 className="dd-mb-4 dd-text-3xl dd-font-semibold">{title}</h1>
        {body}
      </div>
      <div className="dd-flex">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="dd-mr-2"
          onClick={onBack}
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button type="button" onClick={onNext} disabled={nextButtonDisabled}>
          {nextButtonText}
        </Button>
      </div>
    </div>
  );
}

function BussinessNameStep({
  className,
  onNext,
  onBack,
}: {
  className?: string;
  onNext: () => void;
  onBack: () => void;
}) {
  const [bussinessName, setBussinessName] = useState("");

  return (
    <StepLayout
      className={className}
      onBack={onBack}
      onNext={onNext}
      badge="About"
      title="What is the name of your business?"
      nextButtonText="Next"
      nextButtonDisabled={bussinessName === ""}
      body={
        <div className="dd-w-full sm:dd-w-[360px]">
          <Input
            name="business_name"
            placeholder="Enter your business name"
            onChange={(event) => {
              setBussinessName(event.currentTarget.value);
            }}
          />
        </div>
      }
    />
  );
}

function BussinessLogoStep({
  className,
  onNext,
  onBack,
}: {
  className?: string;
  onNext: () => void;
  onBack: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bussinessLogo, setBussinessLogo] = useState<FileList | null>(null);

  return (
    <StepLayout
      className={className}
      onBack={onBack}
      onNext={onNext}
      badge="About"
      title="Do you have logo for your business?"
      nextButtonText="Next"
      body={
        <div className="dd-flex dd-gap-2">
          <Input
            name="business_logo"
            type="file"
            className="dd-flex-1"
            ref={fileInputRef}
            onChange={(event) => {
              setBussinessLogo(event.currentTarget.files);
            }}
          />
          {bussinessLogo !== null && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
                setBussinessLogo(null);
              }}
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      }
    />
  );
}

function SocialNetworkStep({
  className,
  onNext,
  onBack,
}: {
  className?: string;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <StepLayout
      className={className}
      onBack={onBack}
      onNext={onNext}
      badge="Social Network"
      title="How people contact you?"
      nextButtonText="Next"
      body={
        <div className="dd-w-full sm:dd-w-[360px]">
          <div className="dd-mb-3 dd-flex dd-items-center">
            <EnvelopeClosedIcon className="dd-mr-3 dd-h-8 dd-w-8" />
            <Input name="email" placeholder="enter your email" />
          </div>
          <div className="dd-mb-3 dd-flex dd-items-center">
            <LinkedInLogoIcon className="dd-mr-3 dd-h-8 dd-w-8" />
            <Input name="linkedin" placeholder="@username" />
          </div>
          <div className="dd-mb-3 dd-flex dd-items-center">
            <InstagramLogoIcon className="dd-mr-3 dd-h-8 dd-w-8" />
            <Input name="instagram" placeholder="@username" />
          </div>
        </div>
      }
    />
  );
}

function OptionStep({
  className,
  onNext,
  onBack,
}: {
  className?: string;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <StepLayout
      className={className}
      onBack={onBack}
      onNext={onNext}
      badge="Template"
      title="Choose how to design your website"
      nextButtonText="Save & Proceed"
      body={
        <div className="dd-w-full">
          <div className="dd-mb-3 dd-flex dd-items-center dd-rounded-md dd-border dd-p-4">
            <div className="dd-flex-1">
              <span className="dd-block dd-text-lg dd-font-bold">
                Start from a template
              </span>
              <span className="dd-text-slate-500">
                Create a site for your client from responsive layout
              </span>
            </div>
            <ArrowRightIcon className="dd-h-5 dd-w-5" />
          </div>
          <div className="dd-mb-3 dd-flex dd-items-center dd-rounded-md dd-border dd-p-4">
            <div className="dd-flex-1">
              <span className="dd-block dd-text-lg dd-font-bold">
                Start from blank canvas
              </span>
              <span className="dd-text-slate-500">
                Turn your idea into well-perfect design
              </span>
            </div>
            <ArrowRightIcon className="dd-h-5 dd-w-5" />
          </div>
        </div>
      }
    />
  );
}

export default function FirstSetupPage() {
  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step === 4) {
      return;
    }

    setStep(step + 1);
  };

  const onBack = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  };

  return (
    <main className="dd-flex dd-min-h-dvh dd-items-center dd-p-4">
      <form className="dd-mx-auto">
        <BussinessNameStep
          onNext={onNext}
          onBack={onBack}
          className={step === 1 ? "dd-block" : "dd-hidden"}
        />
        <BussinessLogoStep
          onNext={onNext}
          onBack={onBack}
          className={step === 2 ? "dd-block" : "dd-hidden"}
        />
        <SocialNetworkStep
          onNext={onNext}
          onBack={onBack}
          className={step === 3 ? "dd-block" : "dd-hidden"}
        />
        <OptionStep
          onNext={onNext}
          onBack={onBack}
          className={step === 4 ? "dd-block" : "dd-hidden"}
        />
      </form>
    </main>
  );
}
