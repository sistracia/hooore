import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../divider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Divider> = {
  title: "Example/Divider",
  component: Divider,
  decorators: [
    (Story) => {
      return (
        <div className="comp-flex comp-h-screen comp-w-full comp-justify-center comp-align-middle">
          <Story />
        </div>
      );
    },
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {
    controls: { exclude: ["className"] },
  },
};
