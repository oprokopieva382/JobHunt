import { Form, redirect, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, SuperSubmitButton } from "../components";
import { Logo } from "../components";
import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
   try {
    await customFetch.post("auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

export const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <FormRow name="email" defaultValue="John@gmail.com" type="email" />
        <FormRow name="password" defaultValue="John123" type="password" />
        <SuperSubmitButton />
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
