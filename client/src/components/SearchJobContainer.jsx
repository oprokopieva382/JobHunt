import Wrapper from "./../assets/wrappers/DashboardFormPage";
import { Form, Link } from "react-router-dom";
import { FormRow } from "./FormRow";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { FormRowSelect } from "./FormRowSelect";
import { SuperSubmitButton } from "./SuperSubmitButton";

export const SearchJobContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search by fields</h5>
        <div className="form-center">
          <FormRow
            type="search"
            defaultValue="Front-end developer"
            name="search"
            labelText="Position/Company"
          />
          <FormRowSelect
            labelText="Job Type"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
            name="jobType"
          />
          <FormRowSelect
            labelText="Job Status"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue="all"
            name="jobStatus"
          />
          <FormRowSelect
            name="sort"
            defaultValue="newest"
            list={[...Object.values(JOB_SORT_BY)]}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset
          </Link>
          <SuperSubmitButton formClass />
        </div>
      </Form>
    </Wrapper>
  );
};
