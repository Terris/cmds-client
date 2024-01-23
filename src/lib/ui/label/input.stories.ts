import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Email",
  },
};
