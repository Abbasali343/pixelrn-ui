import React from "react";
import { ActivityIndicator, Pressable, Text, StyleSheet } from "react-native";
import type { ButtonProps } from "./Button.types";
import { colors } from "../../theme/colors";

export function Button({
  children,
  variant = "solid",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        styles[size],
        styles[variant],
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            variant === "solid" || variant === "destructive"
              ? colors.white
              : colors.primary
          }
        />
      ) : (
        <Text style={[styles.textBase, styles[`${variant}Text`], textStyle]}>
          {children}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  sm: {
    height: 36,
    paddingHorizontal: 14,
  },

  md: {
    height: 44,
    paddingHorizontal: 18,
  },

  lg: {
    height: 52,
    paddingHorizontal: 22,
  },

  fullWidth: {
    width: "100%",
  },

  pressed: {
    opacity: 0.85,
  },

  disabled: {
    opacity: 0.5,
  },

  solid: {
    backgroundColor: colors.primary,
  },

  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },

  ghost: {
    backgroundColor: "transparent",
  },

  soft: {
    backgroundColor: colors.primarySoft,
  },

  link: {
    backgroundColor: "transparent",
    height: "auto",
    paddingHorizontal: 0,
  },

  destructive: {
    backgroundColor: colors.destructive,
  },

  textBase: {
    fontWeight: "600",
    fontSize: 16,
  },

  solidText: {
    color: colors.white,
  },

  outlineText: {
    color: colors.primary,
  },

  ghostText: {
    color: colors.primary,
  },

  softText: {
    color: colors.primary,
  },

  linkText: {
    color: colors.primary,
    textDecorationLine: "underline",
  },

  destructiveText: {
    color: colors.white,
  },
});
