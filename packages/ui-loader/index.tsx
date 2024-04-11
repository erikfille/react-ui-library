import React from "react";
import { ILoaderProps } from "./types";
import "./styles.css";
import { LinesLoader, CircleLoader } from "./components";

export const UiLoader = ({
  type = "lines",
  color = "808080",
}: ILoaderProps) => {
  return (
    <>
      {type === "lines" ? (
        <LinesLoader color={color} />
      ) : (
        <CircleLoader color={color} />
      )}
    </>
  );
};
