import { Link, useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Error page</h1>
      <Link to="/">back home</Link>
    </>
  );
};
