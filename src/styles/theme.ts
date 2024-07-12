// src/styles/theme.ts

export type ThemeType = "light" | "dark";

interface ColorScheme {
  background: string;
  text: string;
  primary: string;
}

interface ThemeColors {
  light: ColorScheme;
  dark: ColorScheme;
}

export const colors: ThemeColors = {
  light: {
    background: "#ffffff",
    text: "#333333",
    primary: "#007bff",
  },
  dark: {
    background: "#333333",
    text: "#ffffff",
    primary: "#4dabf7",
  },
};

export const getThemeColors = (theme: ThemeType): ColorScheme => colors[theme];
