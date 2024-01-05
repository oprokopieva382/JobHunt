import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
