import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputSize?: "small" | "medium" | "large";
  icon?: IconType;
  error?: string;
  isMask?: boolean;
  mask?: string;

  iconAction?: () => void;
  iconAfter?: boolean;
}
