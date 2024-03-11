import react from "react";
import "./UiButton.css";

export default function UiButton({
  label = "Botón",
  type = "primary",
  action = () => {},
  disabled = false,
  icon,
  minWidth,
  minHeight,
  width = "60px",
  height = "40px",
  bgColor = "blue",
  textColor = "white",
  borderRadius = 8,
  style,
  className,
}) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    width,
    height,
    minWidth,
    minHeight,
    borderRadius,
  };

  const formatButton = () => {
    if (type === "primary") {
      return {
        backgroundColor: "blue",
        color: "white",
      };
    }
  };

  return (
    <div>
      {style ? (
        <button style={style} aria-label={`button:${label}`} onClick={action}>
          {label}
        </button>
      ) : className ? (
        <button
          className={className}
          onClick={action}
          aria-label={`button:${label}`}
        >
          {label}
        </button>
      ) : (
        <button onClick={action} aria-label={`button:${label}`}></button>
      )}
    </div>
  );
}
