import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, NavBar, SmallSideBar } from "../components";
import { useContext, useState } from "react";
import { createContext } from "react";

  const DashboardContext = createContext();
  
export const DashboardLayout = () => {
  //temp
  const user = { name: "John" };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("dark toggled");
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const logoutUser = async () => {
    console.log("buy user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSideBar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSideBar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <BigSideBar />
          <SmallSideBar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
