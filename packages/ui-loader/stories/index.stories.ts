// DEPENDENCIES
import type { Meta, StoryObj } from "@storybook/react";

// COMPONENTS
import { UiLoader } from "..";

const meta = {
  title: "Basics/UiLoader",
  component: UiLoader,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["lines", "circle"],
      description: 'Select the type of loader that you want'
    },
    color: {
      description: 'Select the color for the loader'
    },
  },
} satisfies Meta<typeof UiLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lines: Story = {
  args: {
    type: 'lines',
    color: "#808080"
  },
};

export const Circle: Story = {
  args: {
    type: 'circle',
    color: "#3189fc"
  },
};
