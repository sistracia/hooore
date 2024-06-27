import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from "../marquee";
import { HoreyLogo } from "../horey-logo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Marquee",
  component: Marquee,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {
    controls: { exclude: ["children", "className"] },
  },
  args: {
    children: <HoreyLogo />,
  },
};
