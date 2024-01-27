import { useLoaderData } from "react-router-dom";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import { SearchJobContainer, JobsContainer } from "../components";

const allJobsQuery = (params) => {
  const { jobStatus, jobType, sort, search, page } = params;
  return {
    queryKey: [
      "jobs",
      jobStatus ?? "all",
      jobType ?? "all",
      search ?? "",
      page ?? 1,
      sort ?? "newest",
    ],
    queryFn: async () => {
      const { data } = await customFetch.get("jobs", { params });
      return data;
    },
  };
};

export const loader =
  (clientQuery) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      await clientQuery.ensureQueryData(allJobsQuery(params));
      return { searchInputValues: { ...params } };
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      return err;
    }
  };

export const AllJobsContext = createContext();

export const AllJobs = () => {
  const { searchInputValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchInputValues));

  return (
    <AllJobsContext.Provider value={{ data, searchInputValues }}>
      <SearchJobContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
