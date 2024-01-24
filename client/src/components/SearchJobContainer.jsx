import Wrapper from "./../assets/wrappers/DashboardFormPage";
import { Form, Link, useSubmit } from "react-router-dom";
import { FormRow } from "./FormRow";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { FormRowSelect } from "./FormRowSelect";


export const SearchJobContainer = () => {
    const onSubmit = useSubmit()
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
            onChange={(e) => {
              onSubmit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="Job Type"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
            name="jobType"
            onChange={(e) => {
              onSubmit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="Job Status"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue="all"
            name="jobStatus"
            onChange={(e) => {
              onSubmit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue="newest"
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              onSubmit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
