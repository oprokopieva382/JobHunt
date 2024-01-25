import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { Logo } from ".";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { NavLinks } from ".";

export const SmallSideBar = () => {
  const { showSideBar, toggleSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header className="navbar-logo">
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
