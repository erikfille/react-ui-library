export interface IButtonProps {
  label: string;
  type: "primary" | "secondary" | "outlined";
  action?: () => void;
  disabled: boolean;
  width?: number;
  height?: number;
  fontColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  icon?: string;
  className?: string;
}
