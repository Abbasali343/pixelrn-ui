import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import type { InputProps } from "./Input.types";
import { colors } from "../../theme/colors";

export function Input({
  label,
  error,
  helperText,
  variant = "outline",
  size = "md",
  fullWidth = true,
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  editable = true,
  ...props
}: InputProps) {
  const hasError = Boolean(error);

  return (
    <View style={[fullWidth && styles.fullWidth, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}

      <View
        style={[
          styles.wrapper,
          styles[size],
          styles[variant],
          hasError && styles.errorBorder,
          !editable && styles.disabled,
        ]}
      >
        {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}

        <TextInput
          editable={editable}
          placeholderTextColor={colors.gray500}
          style={[styles.input, inputStyle]}
          {...props}
        />

        {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
      </View>

      {error ? (
        <Text style={[styles.errorText, errorStyle]}>{error}</Text>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    width: "100%",
  },

  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray900,
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
  },

  sm: {
    minHeight: 36,
    paddingHorizontal: 12,
  },

  md: {
    minHeight: 44,
    paddingHorizontal: 14,
  },

  lg: {
    minHeight: 52,
    paddingHorizontal: 16,
  },

  outline: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray200,
  },

  filled: {
    backgroundColor: colors.gray100,
    borderWidth: 1,
    borderColor: colors.gray100,
  },

  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "transparent",
  },

  errorBorder: {
    borderColor: colors.destructive,
  },

  disabled: {
    opacity: 0.5,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: colors.gray900,
    paddingVertical: 0,
  },

  icon: {
    marginHorizontal: 6,
  },

  helperText: {
    marginTop: 6,
    fontSize: 12,
    color: colors.gray500,
  },

  errorText: {
    marginTop: 6,
    fontSize: 12,
    color: colors.destructive,
  },
});
