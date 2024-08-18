import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@repo/icon";
import { Input } from "./ui/input";

export function SocialMediaFields() {
  return (
    <div className="dd-w-full sm:dd-w-[360px]">
      <div className="dd-mb-3 dd-flex dd-items-center">
        <EnvelopeClosedIcon className="dd-mr-3 dd-h-8 dd-w-8" />
        <Input name="social_email" placeholder="enter your email" />
      </div>
      <div className="dd-mb-3 dd-flex dd-items-center">
        <LinkedInLogoIcon className="dd-mr-3 dd-h-8 dd-w-8" />
        <Input name="social_linkedin" placeholder="@username" />
      </div>
      <div className="dd-mb-3 dd-flex dd-items-center">
        <InstagramLogoIcon className="dd-mr-3 dd-h-8 dd-w-8" />
        <Input name="social_instagram" placeholder="@username" />
      </div>
    </div>
  );
}
