import Wrapper from "./../assets/wrappers/DashboardFormPage";
import { Form } from "react-router-dom";
import { FormRow } from "./FormRow";
import { JOB_TYPE } from "../../../utils/constants";

export const SearchJobContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search</h5>
        <div className="form-center">
          <FormRow type="search" defaultValue="search" name="search" />
          <FormRow
            labelText="Job Type"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
            name="jobType"
          />
        </div>
      </Form>
    </Wrapper>
  );
};
