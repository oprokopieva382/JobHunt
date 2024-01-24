import Wrapper from "./../assets/wrappers/DashboardFormPage";
import { Form, Link, useSubmit } from "react-router-dom";
import { FormRow } from "./FormRow";
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { FormRowSelect } from "./FormRowSelect";
import { useAllJobsContext } from "../hooks/useAllJobsContext";

export const SearchJobContainer = () => {
  const onSubmit = useSubmit();
  const { searchInputParams } = useAllJobsContext();
  const { jobStatus, jobType, sort, search } = searchInputParams;

  const runDebounce = (onChange) => {
    let timeout;
    return (e) => {
      const formValues = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(formValues);
      }, 2000);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search by fields</h5>
        <div className="form-center">
          <FormRow
            type="search"
            defaultValue={search}
            name="search"
            labelText="Position/Company"
            onChange={runDebounce((inputs) => onSubmit(inputs))}
          />
          <FormRowSelect
            labelText="Job Type"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            name="jobType"
            onChange={(e) => {
              onSubmit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="Job Status"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            name="jobStatus"
            onChange={(e) => {
              onSubmit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
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
