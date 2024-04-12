// DEPENDENCIES
import React from "react";

// TYPES
import { ILoaderComponentProps } from "../types";

// STYLES
import "../styles.css";

export const CircleLoader = ({ color }: ILoaderComponentProps) => {
  const style = {
    stroke: `${color}`,
  };

  return (
    <svg className="circle-loader" viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50" style={style}></circle>
    </svg>
  );
};
