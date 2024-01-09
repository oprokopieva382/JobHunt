import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import {FormRow} from "../components";
import { Logo } from "../components";

export const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow name="name" defaultValue="John" type="text"/>
        <FormRow name="lastName" labelText="Last Name" defaultValue="Smith" type="text"/>
        <FormRow name="location" defaultValue="Moon" type="text"/>
        <FormRow name="email" defaultValue="John@gmail.com" type="email"/>
        <FormRow name="password" defaultValue="John123" type="password"/>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
