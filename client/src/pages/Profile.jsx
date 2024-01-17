import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const img = await formData.get("avatar");
  if (img && img.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  try {
    await customFetch.patch("users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (err) {
    toast.error(err?.response?.data?.msg);
  }
  return null;
};

export const Profile = () => {
  const navigation = useNavigation();
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              avatar image (max size 0.5MB)
            </label>
            <input
              className="form-input"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
