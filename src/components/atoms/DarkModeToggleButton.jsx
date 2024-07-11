// ThemeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} aria-label="테마 변경">
      {isDarkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default DarkModeToggleButton;
