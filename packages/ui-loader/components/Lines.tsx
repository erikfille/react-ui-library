import React from "react";
import { IAccessibilityLabels } from "../../../types/generalTypes";
import { ILoaderComponentProps } from "../types";
import "../styles.css";

export const LinesLoader = ({ color = "808080" }: ILoaderComponentProps) => {
  const accessibilityLabels: IAccessibilityLabels = {
    "aria-label": `loader`,
    "data-test": `loader`,
  };

  const style = {
    backgroundColor: `#${color}`,
  };

  return (
    <div className="loader-lines" {...accessibilityLabels}>
      <div className="bar1" style={style}></div>
      <div className="bar2" style={style}></div>
      <div className="bar3" style={style}></div>
      <div className="bar4" style={style}></div>
      <div className="bar5" style={style}></div>
      <div className="bar6" style={style}></div>
      <div className="bar7" style={style}></div>
      <div className="bar8" style={style}></div>
      <div className="bar9" style={style}></div>
      <div className="bar10" style={style}></div>
      <div className="bar11" style={style}></div>
      <div className="bar12" style={style}></div>
    </div>
  );
};
