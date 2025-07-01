import { createContext, useContext, useEffect, useState } from "react";
import * as TYPES from "types";

const DarkModeContext = createContext<TYPES.DarkModeContextType | undefined>(
  undefined
);

const updateDarkMode = (darkMode: boolean) => {
  if (darkMode) {
    localStorage.theme = "dark";
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
};

export function DarkModeProvider({ children }: TYPES.DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    updateDarkMode(!darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    // 사용자 기종 다크모드 확인
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = (): TYPES.DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
