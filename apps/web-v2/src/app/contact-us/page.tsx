"use client";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Content4 } from "@/components/content4";
import { Hero } from "@/components/hero";
import { Input } from "@/components/input";
import { RadioGroupItem } from "@/components/radio-group";
import { RadioGroup } from "@/components/radio-group";
import { OptionButton } from "@/components/option-button";
import { Checkbox } from "@/components/checkbox";
import { SocialMediaLinks } from "@/components/social-media-links";
import { useFormState, useFormStatus } from "react-dom";
import { contactUs } from "@/actions/contactus";
import { type ContactUsFormState } from "@/actions/contactus.definition";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Label } from "@/components/label";
import { TextLink } from "@/components/text-link";
import { SpotlightBackground } from "@/components/spotlight-background";

const informationFields = [
  { name: "name", type: "text", placeholder: "Your name*" },
  { name: "phone", type: "tel", placeholder: "Your contact number*" },
  { name: "email", type: "email", placeholder: "Your email" },
  { name: "company", type: "text", placeholder: "Your company name" },
] as const;

const interestOptions = [
  {
    "aria-label": "Software Development Checkbox",
    value: "Software Development",
    children: "Software Development",
  },
  {
    "aria-label": "UI/UX Design Checkbox",
    value: "UI/UX Design",
    children: "UI/UX Design",
  },
  {
    "aria-label": "Training & Upskilling Checkbox",
    value: "Training & Upskilling",
    children: "Training & Upskilling",
  },
] as const;

const budgetOptions = [
  {
    "aria-label": "Below 5.000 Radio Button",
    value: "< 5.000",
    children: "< 5.000",
  },
  {
    "aria-label": "Range between 5.000 to 10.000 Radio Button",
    value: "5.000 - 10.000",
    children: "5.000 - 10.000",
  },
  {
    "aria-label": "Range between 10.000 to 30.000 Radio Button",
    value: "10.000 - 30.000",
    children: "10.000 - 30.000",
  },
  {
    "aria-label": "Above 30.000 Radio Button",
    value: "> 30.000 ",
    children: "> 30.000 ",
  },
] as const;

const timelineOptions = [
  {
    "aria-label": "1 Month Radio Button",
    value: "1 Month",
    children: "1 Month",
  },
  {
    "aria-label": "3 Months Radio Button",
    value: "3 Months",
    children: "3 Months",
  },
  {
    "aria-label": "6 Months Radio Button",
    value: "6 Months",
    children: "6 Months",
  },
  {
    "aria-label": "Tentative Radio Button",
    value: "Tentative",
    children: "Tentative",
  },
] as const;

const initialFormState: ContactUsFormState = {
  resetKey: "",
  errors: {
    name: undefined,
    phone: undefined,
    email: undefined,
    company: undefined,
    interest: undefined,
    budget: undefined,
    timeline: undefined,
    referral_code: undefined,
  },
};

type SubmitProps = {
  disabled?: boolean;
};

function Submit({ disabled }: SubmitProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="cta"
      type="submit"
      className="ss-w-full ss-justify-center sm:ss-w-fit"
      disabled={disabled || pending}
    >
      {pending ? "Sending..." : "Submit"}
    </Button>
  );
}

export default function ContactUs() {
  const [isTnCChecked, setIsTnCChecked] = useState(false);
  const [state, formAction] = useFormState(contactUs, initialFormState);

  useEffect(() => {
    if (state.resetKey) {
      toast({
        description: "Your message has been sent.",
      });
    }
  }, [state.resetKey]);

  useEffect(() => {
    if (!state.errors) {
      return;
    }

    const [firstError] = Object.entries(state.errors).filter(([_, error]) => {
      return error !== undefined;
    });

    if (firstError) {
      const [firstErrorId] = firstError;
      document.getElementById(firstErrorId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      toast({
        description: "Failed to send us a message, please check back the form.",
      });
    }
  }, [state.errors]);

  return (
    <>
      <Hero
        header={<Chip>Contact</Chip>}
        title="Have a cool project for us?"
        description="Fill in the form, or send us an email to hi@hooore.com"
        footer={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
            <SocialMediaLinks />
          </div>
        }
        background={
          <SpotlightBackground
            src="/customer-service.png"
            className="ss-h-full ss-w-full ss-object-contain ss-object-bottom ss-opacity-25 sm:ss-object-cover sm:ss-object-[center_-5%]"
          />
        }
      />
      <form action={formAction} key={state.resetKey} noValidate>
        <Content4
          title="Enter your contact info"
          pushContent={false}
          splitEvenly={true}
          content={
            <div className="ss-flex ss-w-full ss-flex-col ss-gap-3">
              {informationFields.map((informationField) => {
                return (
                  <div key={informationField.name}>
                    <Input
                      id={informationField.name}
                      name={informationField.name}
                      placeholder={informationField.placeholder}
                      type={informationField.type}
                    />
                    <span className="ss-text-red-cabe-400">
                      {state.errors?.[informationField.name]}
                    </span>
                  </div>
                );
              })}
            </div>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="I'm interested in*"
          subtitle="You are able to choose more than one"
          pushContent={false}
          splitEvenly={true}
          content={
            <div className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start">
              {interestOptions.map((interestOption) => {
                return (
                  <OptionButton
                    key={interestOption.value}
                    as={Checkbox}
                    aria-label={interestOption["aria-label"]}
                    value={interestOption.value}
                    id="interest"
                    name="interest"
                  >
                    {interestOption.children}
                  </OptionButton>
                );
              })}
              <span className="ss-text-center ss-text-red-cabe-400 sm:ss-text-left">
                {state.errors?.interest}
              </span>
            </div>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Project Budget (Mio in IDR)*"
          pushContent={false}
          splitEvenly={true}
          content={
            <RadioGroup
              id="budget"
              name="budget"
              className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start"
            >
              {budgetOptions.map((budgetOption) => {
                return (
                  <OptionButton
                    key={budgetOption.value}
                    as={RadioGroupItem}
                    aria-label={budgetOption["aria-label"]}
                    value={budgetOption.value}
                  >
                    {budgetOption.children}
                  </OptionButton>
                );
              })}
              <span className="ss-text-center ss-text-red-cabe-400 sm:ss-text-left">
                {state.errors?.budget}
              </span>
            </RadioGroup>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Project Timeline*"
          pushContent={false}
          splitEvenly={true}
          content={
            <RadioGroup
              id="timeline"
              name="timeline"
              className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start"
            >
              {timelineOptions.map((timelineOption) => {
                return (
                  <OptionButton
                    key={timelineOption.value}
                    as={RadioGroupItem}
                    aria-label={timelineOption["aria-label"]}
                    value={timelineOption.value}
                  >
                    {timelineOption.children}
                  </OptionButton>
                );
              })}
              <span className="ss-text-center ss-text-red-cabe-400 sm:ss-text-left">
                {state.errors?.timeline}
              </span>
            </RadioGroup>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Referral Code"
          pushContent={false}
          splitEvenly={true}
          content={
            <>
              <Input
                placeholder="Referral Code"
                id="referral_code"
                name="referral_code"
              />
              <span className="ss-text-center ss-text-red-cabe-400 sm:ss-text-left">
                {state.errors?.referral_code}
              </span>
            </>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          subtitle="Send it & we will contact you as soon as possible."
          pushContent={false}
          splitEvenly={true}
          content={
            <div className="ss-flex ss-flex-col ss-gap-5 sm:ss-flex-row sm:ss-gap-10">
              <div className="ss-flex ss-items-center ss-space-x-2">
                <Checkbox
                  id="terms"
                  onCheckedChange={(checkedState) => {
                    setIsTnCChecked(!!checkedState);
                  }}
                />
                <Label htmlFor="terms" className="ss-leading-6">
                  I Agree with Hooore{" "}
                  <TextLink
                    target="_blank"
                    rel="noreferrer noopener"
                    href="/privacy-policy"
                  >
                    “Privacy Policy”
                  </TextLink>
                  <br />&{" "}
                  <TextLink
                    target="_blank"
                    rel="noreferrer noopener"
                    href="/term-and-condition"
                  >
                    “Term and Condition”
                  </TextLink>
                  .
                </Label>
              </div>
              <Submit disabled={!isTnCChecked} />
            </div>
          }
        />
      </form>
    </>
  );
}
