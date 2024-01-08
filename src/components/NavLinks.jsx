import { links } from "../utils/Links";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../hooks/useDashboardContext";

export const NavLinks = ({isBigSidebar}) => {
  const { user, toggleSideBar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSideBar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
