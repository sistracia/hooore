import type { Meta, StoryObj } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import { HoreyLogo } from "../horey-logo";
import { NavBar } from "../navbar";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../drowdown-menu";
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/NavBar",
  component: NavBar,
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {
    controls: {
      exclude: ["title", "navlist", "extra", "toggleOpen", "className"],
    },
  },
  args: {
    title: <HoreyLogo />,
    navlist: (
      <>
        <Button variant="text" justify="start">
          Home
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger justify="start">Service</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Digital Product Design</DropdownMenuItem>
            <DropdownMenuItem>Software Development</DropdownMenuItem>
            <DropdownMenuItem>Training & Upscaling</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="text" justify="start">
          About Us
        </Button>
        <Button variant="text" justify="start">
          Contact
        </Button>
      </>
    ),
    extra: (
      <>
        <Button variant="text" justify="start">
          <EnvelopeClosedIcon className="comp-mr-2 comp-h-4 comp-w-4" />{" "}
          email@email.com
        </Button>
        <Button variant="text" justify="start">
          <InstagramLogoIcon className="comp-mr-2 comp-h-4 comp-w-4" />{" "}
          Instagram
        </Button>
        <Button variant="text" justify="start">
          <LinkedInLogoIcon className="comp-mr-2 comp-h-4 comp-w-4" /> LinkedIn
        </Button>
      </>
    ),
  },
};
