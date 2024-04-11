import React from "react";
import { IAccessibilityLabels } from "../../../types/generalTypes";
import { ILoaderComponentProps } from "../types";
import "../styles.css";

export const CircleLoader = ({ color = "808080" }: ILoaderComponentProps) => {
  const accessibilityLabels: IAccessibilityLabels = {
    "aria-label": `loader`,
    "data-test": `loader`,
  };

  const style = {
    border: `4px solid #${color}`,
    borderLeftColor: "transparent",
  };

  return (
    <div className="loader-circle" style={style} {...accessibilityLabels}></div>
  );
};
