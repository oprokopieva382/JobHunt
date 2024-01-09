import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import notFound from "../assets/images/not-found.svg";

const ErrorContent = ({ status, children }) => (
  <Wrapper>
    <div>
      {children}
      {status === 404 && (
        <>
          <img src={notFound} alt="page not found" />
          <h3>Oh, page not found</h3>
          <Link to="/dashboard">back home</Link>
        </>
      )}
    </div>
  </Wrapper>
);

export const Error = () => {
  const error = useRouteError();

  return (
    <ErrorContent status={error.status}>
      {error.status !== 404 && <h3>Something went wrong</h3>}
    </ErrorContent>
  );
};
