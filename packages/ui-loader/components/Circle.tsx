import React from "react";
import { IAccessibilityLabels } from "../../../types/generalTypes";
import { ILoaderComponentProps } from "../types";
import "../styles.css";

export const CircleLoader = ({ color }: ILoaderComponentProps) => {
  const accessibilityLabels: IAccessibilityLabels = {
    "aria-label": `loader`,
    "data-test": `loader`,
  };

  const style = {
    stroke: `${color}`,
  };

  return (
    <svg className="circle-loader" viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50" style={style}></circle>
    </svg>
  );
};
