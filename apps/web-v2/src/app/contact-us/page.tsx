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
import { useFormState } from "react-dom";
import { contactUs } from "@/actions/contactus";

const informationFields = [
  { name: "name", className: "ss-mb-3", placeholder: "Your name*" },
  { name: "email", className: "ss-mb-3", placeholder: "Your email*" },
  { name: "company", className: "", placeholder: "Your company name" },
] as const;

const interestOptions = [
  {
    "aria-label": "Software Development Checkbox",
    id: "interested_c1",
    value: "Software Development",
    children: "Software Development",
  },
  {
    "aria-label": "UI/UX Design Checkbox",
    id: "interested_c2",
    value: "UI/UX Design",
    children: "UI/UX Design",
  },
  {
    "aria-label": "Training & Upskilling Checkbox",
    id: "interested_c3",
    value: "Training & Upskilling",
    children: "Training & Upskilling",
  },
] as const;

const budgetOptions = [
  {
    "aria-label": "Below 5.000 Radio Button",
    id: "budget_r1",
    value: "< 5.000",
    children: "< 5.000",
  },
  {
    "aria-label": "Range between 5.000 to 10.000 Radio Button",
    id: "budget_r2",
    value: "5.000 - 10.000",
    children: "5.000 - 10.000",
  },
  {
    "aria-label": "Range between 10.000 to 30.000 Radio Button",
    id: "budget_r3",
    value: "10.000 - 30.000",
    children: "10.000 - 30.000",
  },
  {
    "aria-label": "Above 30.000 Radio Button",
    id: "budget_r4",
    value: "> 30.000 ",
    children: "> 30.000 ",
  },
] as const;

const timelineOptions = [
  {
    "aria-label": "1 Month Radio Button",
    id: "timeline_r1",
    value: "1 Month",
    children: "1 Month",
  },
  {
    "aria-label": "3 Months Radio Button",
    id: "timeline_r2",
    value: "3 Months",
    children: "3 Months",
  },
  {
    "aria-label": "6 Months Radio Button",
    id: "timeline_r3",
    value: "6 Months",
    children: "6 Months",
  },
  {
    "aria-label": "Tentative Radio Button",
    id: "timeline_r4",
    value: "Tentative",
    children: "Tentative",
  },
] as const;

const initialFormState: Awaited<ReturnType<typeof contactUs>> = {
  errors: {
    name: undefined,
    email: undefined,
    company: undefined,
    interest: undefined,
    budget: undefined,
    timeline: undefined,
    referral_code: undefined,
  },
};

export default function ContactUs() {
  const [state, formAction] = useFormState(contactUs, initialFormState);

  return (
    <>
      <Hero
        header={<Chip>Contact</Chip>}
        title="Have a cool project for us?"
        descripption="Fill in the form, or send us an email to hi@hooore.com"
        footer={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
            <SocialMediaLinks />
          </div>
        }
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/customer-service.png')] ss-bg-contain ss-bg-bottom ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale sm:ss-bg-cover sm:ss-bg-[center_-5%]"></div>
        }
      />
      <form action={formAction}>
        <Content4
          title="Enter your contact info"
          pushContent={false}
          splitEvenly={true}
          content={
            <div className="ss-w-full">
              {informationFields.map((informationField) => {
                return (
                  <div
                    key={informationField.name}
                    className={informationField.className}
                  >
                    <Input
                      name={informationField.name}
                      placeholder={informationField.placeholder}
                    />
                    {state?.errors?.[informationField.name]}
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
                    key={interestOption.id}
                    as={Checkbox}
                    aria-label={interestOption["aria-label"]}
                    id={interestOption.id}
                    value={interestOption.value}
                    name="interest"
                  >
                    {interestOption.children}
                  </OptionButton>
                );
              })}
              {state?.errors?.interest}
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
              name="budget"
              className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start"
            >
              {budgetOptions.map((budgetOption) => {
                return (
                  <OptionButton
                    key={budgetOption.id}
                    as={RadioGroupItem}
                    aria-label={budgetOption["aria-label"]}
                    id={budgetOption.id}
                    value={budgetOption.value}
                  >
                    {budgetOption.children}
                  </OptionButton>
                );
              })}
              {state?.errors?.budget}
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
              name="timeline"
              className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start"
            >
              {timelineOptions.map((timelineOption) => {
                return (
                  <OptionButton
                    key={timelineOption.id}
                    as={RadioGroupItem}
                    aria-label={timelineOption["aria-label"]}
                    id={timelineOption.id}
                    value={timelineOption.value}
                  >
                    {timelineOption.children}
                  </OptionButton>
                );
              })}
              {state?.errors?.timeline}
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
              <Input placeholder="Referral Code" name="referral_code" />{" "}
              {state?.errors?.referral_code}
            </>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          subtitle="Send it & we will contact you as soon as possible."
          pushContent={false}
          splitEvenly={true}
          content={
            <Button
              variant="cta"
              type="submit"
              className="ss-w-full ss-justify-center sm:ss-w-fit"
            >
              Submit
            </Button>
          }
        />
      </form>
    </>
  );
}
