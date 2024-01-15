import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import { Logo } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

export const Register = () => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow name="name" defaultValue="John" type="text" />
        <FormRow
          name="lastName"
          labelText="Last Name"
          defaultValue="Smith"
          type="text"
        />
        <FormRow name="location" defaultValue="Moon" type="text" />
        <FormRow name="email" defaultValue="John@gmail.com" type="email" />
        <FormRow name="password" defaultValue="John123" type="password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
