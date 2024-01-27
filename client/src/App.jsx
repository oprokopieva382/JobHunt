import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkDefaultTheme } from "./utils/checkDefaultTheme";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";
import { action as editJobAction } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { action as profileAction } from "./pages/Profile";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { loader as editJobLoader } from "./pages/EditJob";
import { loader as adminLoader } from "./pages/Admin";
import { loader as statsLoader } from "./pages/Stats";

checkDefaultTheme();

const clientQuery = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction(clientQuery),
      },
      {
        path: "dashboard",
        element: <DashboardLayout clientQuery={clientQuery} />,
        loader: dashboardLoader(clientQuery),
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction(clientQuery),
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader(clientQuery),
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader(clientQuery),
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction(clientQuery),
          },
          { path: "admin", element: <Admin />, loader: adminLoader },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            action: editJobAction(clientQuery),
            loader: editJobLoader(clientQuery),
          },
          {
            path: "delete-job/:id",
            action: deleteJobAction(clientQuery),
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return (
    <QueryClientProvider client={clientQuery}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
