// src/styles/ThemeProvider.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeType, getThemeColors } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeColors = getThemeColors(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeColors}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
