import { Form, redirect, useLoaderData } from "react-router-dom";
import { FormRow, FormRowSelect, SuperSubmitButton } from "../components";
import { customFetch } from "../utils/customFetch";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`jobs/${params.id}`, data);
    toast.success("Job updated successfully");
    return redirect("/dashboard/all-jobs");
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
    return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            defaultValue={job.jobLocation}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <SuperSubmitButton formClass />
        </div>
      </Form>
    </Wrapper>
  );
};
