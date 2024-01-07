import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import { Logo } from "../components";

export const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <FormRow name="email" defaultValue="John@gmail.com" type="email" />
        <FormRow name="password" defaultValue="John123" type="password" />
        <button type="submit" className="btn btn-block">
          login
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
