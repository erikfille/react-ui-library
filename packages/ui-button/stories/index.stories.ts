import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { UiButton } from "..";

const meta = {
  title: "Basics/UiButton",
  component: UiButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary", "outlined"],
    },
  },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    label: "Button",
    disabled: false,
    action: () => {
      console.log("Button action triggered");
    },
  },
};

export const Outlined: Story = {
  args: {
    type: "outlined",
    label: "Button",
    disabled: false,
    action: () => {
      console.log("Button action triggered");
    },
    borderColor: "#1ea7fd",
    fontColor: "grey"
  },
};
