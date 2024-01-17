import { useLoaderData, redirect } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const res = await customFetch.get("users/admin/stats");
    return res.data;
  } catch (err) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

export const Admin = () => {
  const { user, job } = useLoaderData();
  return (
    <Wrapper>
      <h2>admin page</h2>
    </Wrapper>
  );
};
