import { useDashboardContext } from "./DashboardLayout";

export const AddJob = () => {
  const data = useDashboardContext();
  console.log(data);
  return <h1>AddJob page</h1>;
};
