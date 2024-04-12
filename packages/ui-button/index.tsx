// DEPENDENCIES
import React, { CSSProperties } from "react";

// TYPES
import { IAccessibilityLabels } from "../../types/generalTypes";
import { IButtonProps } from "./types";

// STYLES
import "./styles.css";

export const UiButton = ({
  label = "Botón",
  type = "primary",
  action = () => {},
  disabled = false,
  size = "medium",
  fontColor,
  backgroundColor,
  borderColor,
  borderWidth,
  icon,
  className = "",
}: IButtonProps) => {
  const accessibilityLabels: IAccessibilityLabels = {
    "aria-label": `button:${label}`,
    "data-test": `button:${label}`,
  };

  const style: CSSProperties = {};
  if (fontColor) style.color = fontColor;
  if (backgroundColor) style.backgroundColor = backgroundColor;
  if (borderColor) {
    if (!borderWidth) style.border = `2px solid ${borderColor}`;
    else style.border = `${borderWidth} solid ${borderColor}`;
  }

  return (
    <button
      className={`button button--${type} button--${size} ${className}`}
      style={style ? style : undefined}
      onClick={action}
      disabled={disabled}
      {...accessibilityLabels}
    >
      {icon ? icon : null}
      {label}
    </button>
  );
};
