import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../hooks/useDashboardContext";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillMoonStarsFill className="toggle-icon" />
      ) : (
        <FaSun className="toggle-icon" />
      )}
    </Wrapper>
  );
};
