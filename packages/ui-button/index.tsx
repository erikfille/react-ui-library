import React from "react";
import "./UiButton.css";
import { IAccessibilityLabels } from "../../types/generalTypes";
import { IButtonProps } from "./types";

export const UiButton = ({
  label = "Botón",
  type = "primary",
  action = () => {},
  disabled = false,
  icon,
  className,
}: IButtonProps) => {

  const accessibilityLabels: IAccessibilityLabels = {
    "aria-label": `button:${label}`,
    "data-test": `button:${label}`,
  };

  return (
    <button onClick={action} aria-label={`button:${label}`}>
      {label}
    </button>
  );
};
