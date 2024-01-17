import { Form, useNavigation, redirect, useLoaderData } from "react-router-dom";
import { FormRow, FormRowSelect } from "../components";
import { customFetch } from "../utils/customFetch";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch("jobs/:id", data);
    toast.success("Job updated successfully");
    return redirect("all-jobs");
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`jobs/${params.id}`);
    return data;
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return redirect("dashboard/all-jobs");
  }
};

export const EditJob = () => {
  const { job } = useLoaderData();
  console.log(job);
  return <h1>EditJob page</h1>;
};
