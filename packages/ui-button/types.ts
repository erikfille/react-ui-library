export interface IButtonProps {
  label: string;
  type: "primary" | "outlined";
  action: () => void;
  disabled?: boolean;
  size?: string;
  width?: string;
  height?: string;
  fontColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  icon?: string;
  className?: string;
}
