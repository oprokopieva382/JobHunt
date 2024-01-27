import { Form, useOutletContext } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { FormRow, SuperSubmitButton } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

export const action =
  (clientQuery) =>
  async ({ request }) => {
    const formData = await request.formData();
    const img = await formData.get("avatar");
    if (img && img.size > 500000) {
      toast.error("Image size too large");
      return null;
    }
    try {
      await customFetch.patch("users/update-user", formData);
      clientQuery.invalidateQueries(["user"]);
      toast.success("Profile updated successfully");
      return redirect("dashboard");
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      return null;
    }
  };

export const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              your avatar (max size 0.5MB)
            </label>
            <input
              className="form-input"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            name="name"
            labelText="First name"
            defaultValue={name}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <SuperSubmitButton formClass />
        </div>
      </Form>
    </Wrapper>
  );
};
