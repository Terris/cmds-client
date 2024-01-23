import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Checkbox",
  component: CheckboxTemplate,
  parameters: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

function CheckboxTemplate(args: CheckboxProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" {...args} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
