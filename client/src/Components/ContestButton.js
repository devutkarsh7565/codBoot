import { ContestContext } from "../Providers/ContestProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkThemeContext } from "../Providers/DarkThemeProvider";

const ContestButton = (props) => {
  const text = props.platformButton.toLowerCase();
  const { platformName, setPlatformName } = useContext(ContestContext);
  const { isDarkMode } = useContext(DarkThemeContext);

  const handleColor = () => {
    if (props.platformButton === props.platformRoute || platformName === text) {
      return "bg-green-900";
    } else {
      return "bg-green-500";
    }
  };
  const handleDarkColor = () => {
    if (props.platformButton === props.platformRoute || platformName === text) {
      return "bg-violet-500";
    } else {
      return "bg-blue-500";
    }
  };
  return (
    <>
      <Link to={`/contest/${props.platformButton}`}>
        <button
          onClick={() => {
            setPlatformName(props.platformApi);
            //   setGenreColor("#47B5FF");
            // props.setSearchMovie([]);
          }}
          style={{ backgroundColor: handleColor() }}
          className={" md:text-base text-sm px-3 border border-white dark:border-[#6F7684] rounded-sm py-2 md:px-5 text-white  md:mr-8 mr-3 hover:text-white top-0 left-0 transition ease-in-out delay-150 translate-y-0.5 sm:hover:-translate-x-1 hover:scale-110  duration-300 ... md:mb-8 mb-3  ".concat(
            isDarkMode ? handleDarkColor() : handleColor()
          )}
        >
          {props.platformButton}
        </button>
      </Link>
    </>
  );
};

export default ContestButton;
