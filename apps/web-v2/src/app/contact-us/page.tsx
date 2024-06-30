import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Content4 } from "@/components/content4";
import { Hero } from "@/components/hero";
import { Input } from "@/components/input";
import { RadioButton } from "@/components/radio-button";
import { RadioGroup } from "@/components/radio-group";
import { SocialMediaLinks } from "@/components/social-media-links";

export default function ContactUs() {
  return (
    <>
      <Hero
        header={<Chip>Contact</Chip>}
        title="Have a cool project for us?"
        descripption="Fill in the form, or send us an email holla@hooore.com"
        footer={
          <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-x-6 sm:ss-justify-start">
            <SocialMediaLinks />
          </div>
        }
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-bg-[url('/customer-service.png')] ss-bg-contain ss-bg-bottom ss-bg-no-repeat ss-fill-none ss-opacity-25 ss-brightness-50 ss-grayscale sm:ss-bg-cover sm:ss-bg-[center_-5%]"></div>
        }
      />
      <form>
        <Content4
          title="Enter your contact info"
          pushContent={false}
          splitEvenly={true}
          content={
            <div className="ss-w-full">
              <Input className="ss-mb-3" placeholder="Your name*" />
              <Input className="ss-mb-3" placeholder="Your email*" />
              <Input placeholder="Your company name" />
            </div>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="I’m interested in*"
          subtitle="You are able to chose more than one"
          pushContent={false}
          splitEvenly={true}
          content={
            <RadioGroup className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start">
              <RadioButton
                aria-label="Software Development Radio Button"
                id="interested_r1"
                value="software_development"
              >
                Software Development
              </RadioButton>
              <RadioButton
                aria-label="UI/UX Design Radio Button"
                id="interested_r2"
                value="us_ux_design"
              >
                UI/UX Design
              </RadioButton>
              <RadioButton
                aria-label="Training & Upskilling Radio Button"
                id="interested_r3"
                value="training_upskilling"
              >
                Training & Upskilling
              </RadioButton>
            </RadioGroup>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Project Budget (USD)*"
          pushContent={false}
          splitEvenly={true}
          content={
            <RadioGroup className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start">
              <RadioButton
                aria-label="Below 5.000 Radio Button"
                id="budget_r1"
                value="below_5000"
              >
                {"< 5.000"}
              </RadioButton>
              <RadioButton
                aria-label="Range between 5.000 to 10.000 Radio Button"
                id="budget_r2"
                value="range_5000_10000"
              >
                5.000 - 10.000
              </RadioButton>
              <RadioButton
                aria-label="Range between 10.000 to 30.000 Radio Button"
                id="budget_r3"
                value="range_10000_30000"
              >
                10.000 - 30.000
              </RadioButton>
              <RadioButton
                aria-label="Above 30.000 Radio Button"
                id="budget_r4"
                value="above_10000_30000"
              >
                {"> 30.000 "}
              </RadioButton>
            </RadioGroup>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Project Timeline*"
          pushContent={false}
          splitEvenly={true}
          content={
            <RadioGroup className="ss-flex ss-w-full ss-flex-col ss-flex-wrap ss-items-center ss-gap-3 sm:ss-flex-row sm:ss-justify-start">
              <RadioButton
                aria-label="1 Month Radio Button"
                id="timeline_r1"
                value="1_month"
              >
                1 Month
              </RadioButton>
              <RadioButton
                aria-label="3 Months Radio Button"
                id="timeline_r2"
                value="3_month"
              >
                3 Months
              </RadioButton>
              <RadioButton
                aria-label="6 Months Radio Button"
                id="timeline_r3"
                value="6_month"
              >
                6 Months
              </RadioButton>
              <RadioButton
                aria-label="Tentative Radio Button"
                id="timeline_r3"
                value="tentative"
              >
                Tentative
              </RadioButton>
            </RadioGroup>
          }
        />
        <Content4
          className="ss-border-t-2 ss-border-t-crema-cream-500"
          title="Referral Code"
          pushContent={false}
          splitEvenly={true}
          content={<Input className="ss-w-full" placeholder="Referral Code" />}
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
