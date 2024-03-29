import { links } from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../hooks/useDashboardContext";

export const NavLinks = ({ isBigSidebar }) => {
  const { user, toggleSideBar } = useDashboardContext();
  const { role } = user;
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        if (path === "admin" && role !== "admin") return;
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
