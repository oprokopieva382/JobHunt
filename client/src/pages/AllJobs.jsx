import { SearchJobContainer, JobsContainer } from "../components";
import { customFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { createContext } from "react";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("jobs", { params });
    return { data };
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

export const AllJobsContext = createContext();
export const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchJobContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
