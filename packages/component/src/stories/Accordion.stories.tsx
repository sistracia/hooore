import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: { type: { control: "select", options: ["single", "multiple"] } },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {
    controls: { exclude: ["children", "onClick"] },
  },
  args: {
    type: "single",
    className: "w-full",
    children: [
      <AccordionItem key="item-1" value="item-1">
        <AccordionTrigger>How we think?</AccordionTrigger>
        <AccordionContent>
          Think about a cloud. Just float around and be there. Decide where your
          cloud lives. Maybe he lives right in here. Let&apos;s put some
          highlights on these little trees. The sun wouldn&apos;t forget them.
          Let the paint work. This present moment is perfect simply due to the
          fact you&apos;re experiencing it. These things happen automatically.
          All you have to do is just let them happen. Here we&apos;re limited by
          the time we have. We&apos;ll take a little bit of Van Dyke Brown. You
          want your tree to have some character. Make it special. I was blessed
          with a very steady hand; and it comes in very handy when you&apos;re
          doing these little delicate things.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key="item-2" value="item-2">
        <AccordionTrigger>These things happen automatically?</AccordionTrigger>
        <AccordionContent>
          Think about a cloud. Just float around and be there. Decide where your
          cloud lives. Maybe he lives right in here. Let&apos;s put some
          highlights on these little trees. The sun wouldn&apos;t forget them.
          Let the paint work. This present moment is perfect simply due to the
          fact you&apos;re experiencing it. These things happen automatically.
          All you have to do is just let them happen. Here we&apos;re limited by
          the time we have. We&apos;ll take a little bit of Van Dyke Brown. You
          want your tree to have some character. Make it special. I was blessed
          with a very steady hand; and it comes in very handy when you&apos;re
          doing these little delicate things.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key="item-3" value="item-3">
        <AccordionTrigger>
          All you have to do is just let them happen?
        </AccordionTrigger>
        <AccordionContent>
          Think about a cloud. Just float around and be there. Decide where your
          cloud lives. Maybe he lives right in here. Let&apos;s put some
          highlights on these little trees. The sun wouldn&apos;t forget them.
          Let the paint work. This present moment is perfect simply due to the
          fact you&apos;re experiencing it. These things happen automatically.
          All you have to do is just let them happen. Here we&apos;re limited by
          the time we have. We&apos;ll take a little bit of Van Dyke Brown. You
          want your tree to have some character. Make it special. I was blessed
          with a very steady hand; and it comes in very handy when you&apos;re
          doing these little delicate things.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key="item-4" value="item-4">
        <AccordionTrigger>
          The only thing worse than yellow snow is green snow ?
        </AccordionTrigger>
        <AccordionContent>
          Think about a cloud. Just float around and be there. Decide where your
          cloud lives. Maybe he lives right in here. Let&apos;s put some
          highlights on these little trees. The sun wouldn&apos;t forget them.
          Let the paint work. This present moment is perfect simply due to the
          fact you&apos;re experiencing it. These things happen automatically.
          All you have to do is just let them happen. Here we&apos;re limited by
          the time we have. We&apos;ll take a little bit of Van Dyke Brown. You
          want your tree to have some character. Make it special. I was blessed
          with a very steady hand; and it comes in very handy when you&apos;re
          doing these little delicate things.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key="item-5" value="item-5">
        <AccordionTrigger>
          But we&apos;re not there yet, so we don&apos;t need to worry about it?
        </AccordionTrigger>
        <AccordionContent>
          Think about a cloud. Just float around and be there. Decide where your
          cloud lives. Maybe he lives right in here. Let&apos;s put some
          highlights on these little trees. The sun wouldn&apos;t forget them.
          Let the paint work. This present moment is perfect simply due to the
          fact you&apos;re experiencing it. These things happen automatically.
          All you have to do is just let them happen. Here we&apos;re limited by
          the time we have. We&apos;ll take a little bit of Van Dyke Brown. You
          want your tree to have some character. Make it special. I was blessed
          with a very steady hand; and it comes in very handy when you&apos;re
          doing these little delicate things.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key="item-6" value="item-6">
        <AccordionTrigger>
          There&apos;s nothing wrong with having a tree as a friend.?
        </AccordionTrigger>
        <AccordionContent>
          Think about a cloud. Just float around and be there. Decide where your
          cloud lives. Maybe he lives right in here. Let&apos;s put some
          highlights on these little trees. The sun wouldn&apos;t forget them.
          Let the paint work. This present moment is perfect simply due to the
          fact you&apos;re experiencing it. These things happen automatically.
          All you have to do is just let them happen. Here we&apos;re limited by
          the time we have. We&apos;ll take a little bit of Van Dyke Brown. You
          want your tree to have some character. Make it special. I was blessed
          with a very steady hand; and it comes in very handy when you&apos;re
          doing these little delicate things.
        </AccordionContent>
      </AccordionItem>,
    ],
  },
};
