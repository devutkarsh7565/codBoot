import { ContestContext } from "../Providers/ContestProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ContestButton = (props) => {
  const text = props.platformButton.toLowerCase();
  const { platformName, setPlatformName } = useContext(ContestContext);

  const handleColor = () => {
    if (props.platformButton === props.platformRoute || platformName === text) {
      return "green";
    } else {
      return "red";
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
          className=" md:text-base text-sm px-3 border-2 border-white rounded-xl py-2 md:px-5 text-black  md:mr-8 mr-3 hover:text-black top-0 left-0 transition ease-in-out delay-150 translate-y-0.5 sm:hover:-translate-x-1 hover:scale-110  duration-300 ... md:mb-8 mb-3  "
        >
          {props.platformButton}
        </button>
      </Link>
    </>
  );
};

export default ContestButton;
