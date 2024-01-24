import { Form, Link } from "react-router-dom";
import { MdEditCalendar } from "react-icons/md";
import { GiDesk } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { JobInfo } from "./JobInfo";
import Wrapper from "../assets/wrappers/Job";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

export const Job = ({
  _id,
  company,
  position,
  createdAt,
  jobLocation,
  jobType,
  jobStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper jobStatus={jobStatus}>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <h5>{company}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<MdEditCalendar />} text={date} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
          <JobInfo icon={<CiLocationOn />} text={jobLocation} />
          <JobInfo icon={<GiDesk />} text={jobType} />
        </div>
        <footer className="actions">
          <Link className="btn edit-btn" to={`../edit-job/${_id}`}>
            Edit
          </Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
