import { useState } from "react";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { PiCaretDoubleDownThin } from "react-icons/pi";

export const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <PiUserCirclePlusFill className="logout-icon" />
        {user?.name}
        <PiCaretDoubleDownThin />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
         Logout
        </button>
      </div>
    </Wrapper>
  );
};
