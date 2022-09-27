import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const DarkThemeContext = createContext(null);

const DarkThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchTheme = () => {
    if (isDarkMode) {
      const root = document.documentElement;
      root.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };
  const contextValue = { isDarkMode, setIsDarkMode, switchTheme };
  return (
    <>
      <DarkThemeContext.Provider value={contextValue}>
        {children}
      </DarkThemeContext.Provider>
    </>
  );
};

export default DarkThemeProvider;
