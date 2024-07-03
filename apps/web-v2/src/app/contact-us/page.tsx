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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const informationFields = [
  { name: "name", className: "ss-mb-3", placeholder: "Your name*" },
  { name: "email", className: "ss-mb-3", placeholder: "Your email*" },
  { name: "company", className: "", placeholder: "Your company name" },
] as const;

const interestOptions = [
  {
    "aria-label": "Software Development Checkbox",
    id: "interested_c1",
    value: "software_development",
    children: "Software Development",
  },
  {
    "aria-label": "UI/UX Design Checkbox",
    id: "interested_c2",
    value: "ui_ux_design",
    children: "UI/UX Design",
  },
  {
    "aria-label": "Training & Upskilling Checkbox",
    id: "interested_c3",
    value: "training_upskilling",
    children: "Training & Upskilling",
  },
] as const;

const budgetOptions = [
  {
    "aria-label": "Below 5.000 Radio Button",
    id: "budget_r1",
    value: "below_5000",
    children: "< 5.000",
  },
  {
    "aria-label": "Range between 5.000 to 10.000 Radio Button",
    id: "budget_r2",
    value: "range_5000_10000",
    children: "5.000 - 10.000",
  },
  {
    "aria-label": "Range between 10.000 to 30.000 Radio Button",
    id: "budget_r3",
    value: "range_10000_30000",
    children: "10.000 - 30.000",
  },
  {
    "aria-label": "Above 30.000 Radio Button",
    id: "budget_r4",
    value: "above_10000_30000",
    children: "> 30.000 ",
  },
] as const;

const timelineOptions = [
  {
    "aria-label": "1 Month Radio Button",
    id: "timeline_r1",
    value: "1_month",
    children: "1 Month",
  },
  {
    "aria-label": "3 Months Radio Button",
    id: "timeline_r2",
    value: "3_month",
    children: "3 Months",
  },
  {
    "aria-label": "6 Months Radio Button",
    id: "timeline_r3",
    value: "6_month",
    children: "6 Months",
  },
  {
    "aria-label": "Tentative Radio Button",
    id: "timeline_r4",
    value: "tentative",
    children: "Tentative",
  },
] as const;

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character.",
  }),
  email: z.string().min(1, {
    message: "Email must be at least 1 character.",
  }),
  company: z.string().min(1, {
    message: "Compay must be at least 1 character.",
  }),
  interest: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one interest.",
  }),
  budget: z.enum(
    [
      "below_5000",
      "range_5000_10000",
      "range_10000_30000",
      "above_10000_30000",
    ],
    {
      required_error: "You need to select a project budget type.",
    },
  ),
  timeline: z.enum(["1_month", "3_month", "6_month", "tentative"], {
    required_error: "You need to select a project budget type.",
  }),
  referral_code: z.string(),
});

export default function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: [],
      budget: undefined,
      timeline: undefined,
      referral_code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Content4
            title="Enter your contact info"
            pushContent={false}
            splitEvenly={true}
            content={
              <div className="ss-w-full">
                {informationFields.map((informationField) => {
                  return (
                    <FormField
                      key={informationField.name}
                      control={form.control}
                      name={informationField.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className={informationField.className}
                              placeholder={informationField.placeholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
              <FormField
                control={form.control}
                name="interest"
                render={() => {
                  return (
                    <FormItem className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start">
                      {interestOptions.map((interestOption) => {
                        return (
                          <FormField
                            key={interestOption.id}
                            control={form.control}
                            name="interest"
                            render={({ field }) => {
                              return (
                                <FormItem key={interestOption.id}>
                                  <FormControl>
                                    <OptionButton
                                      as={Checkbox}
                                      checked={field.value?.includes(
                                        interestOption.value,
                                      )}
                                      aria-label={interestOption["aria-label"]}
                                      id={interestOption.id}
                                      value={interestOption.value}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              interestOption.value,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) =>
                                                  value !==
                                                  interestOption.value,
                                              ),
                                            );
                                      }}
                                    >
                                      {interestOption.children}
                                    </OptionButton>
                                  </FormControl>
                                </FormItem>
                              );
                            }}
                          />
                        );
                      })}
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            }
          />
          <Content4
            className="ss-border-t-2 ss-border-t-crema-cream-500"
            title="Project Budget (Mio in IDR)*"
            pushContent={false}
            splitEvenly={true}
            content={
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start"
                        >
                          {budgetOptions.map((budgetOption) => {
                            return (
                              <FormControl key={budgetOption.id}>
                                <OptionButton
                                  as={RadioGroupItem}
                                  aria-label={budgetOption["aria-label"]}
                                  id={budgetOption.id}
                                  value={budgetOption.value}
                                >
                                  {budgetOption.children}
                                </OptionButton>
                              </FormControl>
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            }
          />
          <Content4
            className="ss-border-t-2 ss-border-t-crema-cream-500"
            title="Project Timeline*"
            pushContent={false}
            splitEvenly={true}
            content={
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start"
                        >
                          {timelineOptions.map((timelineOption) => {
                            return (
                              <FormControl key={timelineOption.id}>
                                <OptionButton
                                  as={RadioGroupItem}
                                  aria-label={timelineOption["aria-label"]}
                                  id={timelineOption.id}
                                  value={timelineOption.value}
                                >
                                  {timelineOption.children}
                                </OptionButton>
                              </FormControl>
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            }
          />
          <Content4
            className="ss-border-t-2 ss-border-t-crema-cream-500"
            title="Referral Code"
            pushContent={false}
            splitEvenly={true}
            content={
              <FormField
                control={form.control}
                name="referral_code"
                render={({ field }) => (
                  <FormItem className="ss-w-full">
                    <FormControl>
                      <Input placeholder="Referral Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
      </Form>
    </>
  );
}
