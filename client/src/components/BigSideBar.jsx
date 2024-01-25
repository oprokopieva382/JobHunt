import Wrapper from "../assets/wrappers/BigSidebar";
import { Logo } from "./logo";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { NavLinks } from ".";

export const BigSideBar = () => {
  const { showSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header className="navbar-logo">
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
