import { SearchJobContainer, JobsContainer } from "../components";
import {customFetch} from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("jobs");
    return { data };
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

export const AllJobs = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <>
      <SearchJobContainer />
      <JobsContainer />
    </>
  );
};
