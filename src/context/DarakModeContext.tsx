import { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

const updateDarkMode = (darkMode: boolean) => {
  if (darkMode) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark"); // html 클래스 추가
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
};

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
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

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
