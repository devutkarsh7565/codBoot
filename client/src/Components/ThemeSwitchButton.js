import React from "react";
import { FaMoon, FaRegLightbulb } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { DarkThemeContext } from "../Providers/DarkThemeProvider";
import { useContext } from "react";

const ThemeSwitchButton = () => {
  const { isDarkMode, switchTheme } = useContext(DarkThemeContext);
  const handleChange = () => {
    switchTheme();
  };
  return (
    <div>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className={"checkbox fixed h-12 w-12 z-20 opacity-0".concat(
            isDarkMode ? "" : " dark"
          )}
          onChange={handleChange}
        />
        <label
          className={"h-[18px] w-[34px] flex rounded-full items-center justify-between p-[3px] relative scale-150 mx-2 mr-5".concat(
            isDarkMode ? " bg-blue-500" : " bg-black"
          )}
        >
          <FaMoon className="text-white text-sm" />
          <BsFillSunFill className="text-yellow-300 text-sm" />
          <div
            className={"w-[16px] h-[16px] bg-white transition-transform rounded-full fixed top-[1px] left-[1px]".concat(
              isDarkMode ? "" : " translate-x-4"
            )}
          />
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitchButton;
