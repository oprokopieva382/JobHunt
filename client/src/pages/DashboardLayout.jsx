import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, NavBar, SmallSideBar } from "../components";
import { createContext, useState } from "react";
import { checkDefaultTheme } from "../utils/checkDefaultTheme";
import { customFetch } from "../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await customFetch("users/current-user");
    return data;
  } catch (err) {
    redirect("/");
  }
};

export const DashboardContext = createContext();

export const DashboardLayout = () => {
  const { user } = useLoaderData();

  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
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
              <Outlet context={{user}}/>
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
