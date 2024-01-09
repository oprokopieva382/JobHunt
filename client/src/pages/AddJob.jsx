import { useDashboardContext } from "../hooks/useDashboardContext";

export const AddJob = () => {
  const data = useDashboardContext();
  console.log(data);
  return <h1>AddJob page</h1>;
};
