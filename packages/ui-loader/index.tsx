// DEPENDENCIES
import React from "react";

// COMPONENTS
import { LinesLoader, CircleLoader } from "./components";

// TYPES
import { ILoaderProps } from "./types";
import { IAccessibilityLabels } from "../../types/generalTypes";

// STYLES
import "./styles.css";

export const UiLoader = ({
  type = "lines",
  color = "808080",
}: ILoaderProps) => {
  const accessibilityLabels: IAccessibilityLabels = {
    "aria-label": `loader`,
    "data-test": `loader`,
  };

  return (
    <div className="loader-container" {...accessibilityLabels}>
      {type === "lines" ? (
        <LinesLoader color={color} />
      ) : (
        <CircleLoader color={color} />
      )}
    </div>
  );
};
