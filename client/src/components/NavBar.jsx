import Wrapper from "../assets/wrappers/Navbar";
import { BsSliders } from "react-icons/bs";
import { Logo } from "./logo";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { LogoutContainer } from ".";
import { ThemeToggle } from ".";


export const NavBar = () => {
  const {toggleSideBar} = useDashboardContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <BsSliders />
        </button>
        <div className="navbar-logo">
          <Logo />
          <h4 className="logo-text">Career Dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
