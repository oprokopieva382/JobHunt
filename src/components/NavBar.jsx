import Wrapper from "../assets/wrappers/Navbar";
import { BsSliders } from "react-icons/bs";
import { Logo } from "./logo";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { LogoutContainer } from "./LogoutContainer";


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
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
        <LogoutContainer/>
        </div>
      </div>
    </Wrapper>
  );
};
