import React from "react";

import UiButton from "..";

export default {
  title: "UiButton",
  component: UiButton,
  argTypes: {
    buttonType: {
      control: "select",
      options: ["primary", "secondary", "outlined"],
    },
  },
};

const Template = (args) => <UiButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  buttonType: "primary",
  label: "Primario",
};
