import {
  Outlet,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, Loader, NavBar, SmallSideBar } from "../components";
import { createContext, useState } from "react";
import { checkDefaultTheme } from "../utils/checkDefaultTheme";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await customFetch("users/current-user");
    return data;
  },
};

export const loader = (clientQuery) => async () => {
  try {
    return await clientQuery.ensureQueryData(userQuery);
  } catch (err) {
    redirect("/");
  }
};

export const DashboardContext = createContext();

export const DashboardLayout = ({ clientQuery }) => {
  const { user } = useQuery(userQuery)?.data;

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
    clientQuery.invalidateQuery()
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
