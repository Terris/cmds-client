import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

function CardContents() {
  return (
    <>
      <h1 className="text-lg font-bold">Card</h1>
      <p>Card contents</p>
    </>
  );
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: <CardContents />,
    className: "p-4",
  },
};
