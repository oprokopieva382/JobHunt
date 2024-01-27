import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, Loader, NavBar, SmallSideBar } from "../components";
import { createContext, useState } from "react";
import { checkDefaultTheme } from "../utils/checkDefaultTheme";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

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

  const navigate = useNavigate();
  const navigation = useNavigation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const isPageLoaded = navigation.state === "loading";

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
    navigate("/");
    await customFetch("auth/logout");
    toast.success("Logged out, back as needed.");
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
              {isPageLoaded ? <Loader /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
