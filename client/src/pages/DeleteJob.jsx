import { redirect } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action =
  (clientQuery) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`jobs/${params.id}`);
      clientQuery.invalidateQueries(["jobs"]);
      toast.success("Job deleted successfully");
    } catch (err) {
      toast.error(err?.response?.data?.msg);
    }
    return redirect("/dashboard/all-jobs");
  };
