import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { DiagramContainer, StatsContainer } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("jobs/stats");
    return response.data;
  } catch (err) {
    return err;
  }
};

export const Stats = () => {
  const { totalApplicationsByStatus, totalApplicationsByMonth } =
    useLoaderData();

  return (
    <>
      <StatsContainer totalApplicationsByStatus={totalApplicationsByStatus} />
      {totalApplicationsByMonth?.length > 1 && (
        <DiagramContainer data={totalApplicationsByMonth} />
      )}
    </>
  );
};
