import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  primary?: boolean;
  secondary?: boolean;
}
