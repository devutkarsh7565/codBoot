import { useState } from "react";

const useDarkTheme = () => {
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
  return { isDarkMode, switchTheme };
};

export default useDarkTheme;
