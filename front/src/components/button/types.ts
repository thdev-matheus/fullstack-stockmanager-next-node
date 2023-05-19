import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  buttonSize?: "small" | "medium" | "large";
  primary?: boolean;
  secondary?: boolean;
}
