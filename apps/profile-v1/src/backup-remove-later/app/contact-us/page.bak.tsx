"use client";

import { Button } from "@repo/components-v1/button";
import { Content4 } from "@repo/components-v1/backup/content4";
import { Hero } from "@repo/components-v1/hero";
import { Input } from "@repo/components-v1/backup/input";
import { RadioGroupItem } from "@repo/components-v1/backup/radio-group";
import { RadioGroup } from "@repo/components-v1/backup/radio-group";
import { OptionButton } from "@repo/components-v1/backup/option-button";
import { Checkbox } from "@repo/components-v1/backup/checkbox";
import { useFormState, useFormStatus } from "react-dom";
import { contactUsAction } from "@/backup-remove-later/actions/contact-us";
import type { ContactUsFormState } from "@/backup-remove-later/actions/contact-us.definition";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Label } from "@repo/components-v1/backup/label";
import { TextLink } from "@repo/components-v1/text-link";
import { Divider } from "@repo/components-v1/divider";

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
      className="ss-h-fit ss-w-full ss-justify-center sm:ss-w-fit"
      disabled={disabled || pending}
    >
      {pending ? "Sending..." : "Submit"}
    </Button>
  );
}

export default function ContactUs() {
  const [isTnCChecked, setIsTnCChecked] = useState(false);
  const [state, formAction] = useFormState(contactUsAction, initialFormState);

  useEffect(() => {
    if (state.resetKey) {
      toast({
        description: "Your message has been sent.",
      });
      setIsTnCChecked(false);
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
        tag="Contact"
        headline="Have a cool project for us?"
        description="Fill in the form, or send us an email to hi@hooore.com"
        socials={[
          {
            base_url: "mailto:",
            enabled: true,
            username: "hi@hooore.com",
          },
          {
            base_url: "https://www.instagram.com/",
            enabled: true,
            username: "hooore.in",
          },
          {
            base_url: "https://www.linkedin.com/company/",
            enabled: true,
            username: "hooore",
          },
        ]}
        background="https://res.cloudinary.com/dcej6w6ct/image/upload/v1720777620/hooore-web-profile/customer-service.png"
      />
      <Divider />
      <form
        action={formAction}
        key={state.resetKey}
        noValidate
        autoComplete="off"
      >
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
        <Divider />
        <Content4
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
        <Divider />
        <Content4
          title={"Project Budget\n(Mio in IDR)*"}
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
        <Divider />
        <Content4
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
        <Divider />
        <Content4
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
        <Divider />
        <Content4
          subtitle="Send it & we will contact you as soon as possible."
          pushContent={false}
          splitEvenly={true}
          content={
            <div className="ss-flex ss-flex-col ss-gap-5 sm:ss-flex-row sm:ss-gap-10">
              <div className="ss-flex ss-items-center ss-space-x-2">
                <Checkbox
                  id="terms"
                  aria-label="Privacy Policy and Term and Condition Checkbox"
                  onCheckedChange={(checkedState) => {
                    setIsTnCChecked(!!checkedState);
                  }}
                />
                <Label htmlFor="terms" className="ss-text-note ss-leading-6">
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
              <Submit disabled={!isTnCChecked} key={state.resetKey} />
            </div>
          }
        />
      </form>
    </>
  );
}
