import React from "react";
import { IAccessibilityLabels } from "../../types/generalTypes";
import { IButtonProps } from "./types";
import "./styles.css";

export const UiButton = ({
  label = "Botón",
  type = "primary",
  action = () => {},
  disabled = false,
  size = "medium"
  fontColor,
  backgroundColor,
  borderColor,
  icon,
  className = "",
}: IButtonProps) => {

  const accessibilityLabels: IAccessibilityLabels = {
    "aria-label": `button:${label}`,
    "data-test": `button:${label}`,
  };

  return (
    <button
      className={`button button--${size} ${className}`}
      onClick={action}
      disabled={disabled}
      {...accessibilityLabels}
    >
      {icon ? icon : null}
      {label}
    </button>
  );
};
