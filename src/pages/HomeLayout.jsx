import { Outlet } from "react-router-dom";
export const HomeLayout = () => {
  return (
    <>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
};
