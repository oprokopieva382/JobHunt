import { customFetch } from "../utils/customFetch";
import { DiagramContainer, StatsContainer } from "../components";
import { useQuery } from "@tanstack/react-query";

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const res = await customFetch.get("jobs/stats");
    return res;
  },
};

export const loader = (clientQuery) => async () => {
  const data = await clientQuery.ensureQueryData(statsQuery);
  return data;
};

export const Stats = () => {
  const { data } = useQuery(statsQuery);
  const { totalApplicationsByStatus, totalApplicationsByMonth } = data;

  return (
    <>
      <StatsContainer totalApplicationsByStatus={totalApplicationsByStatus} />
      {totalApplicationsByMonth?.length > 1 && (
        <DiagramContainer data={totalApplicationsByMonth} />
      )}
    </>
  );
};
