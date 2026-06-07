import type { ReactNode } from "react";
import type { PressableProps, TextStyle, ViewStyle } from "react-native";

export type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "soft"
  | "link"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends PressableProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
