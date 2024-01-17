import { useLoaderData, redirect } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { FaUsers } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import { StatCard } from "../components";

export const loader = async () => {
  try {
    const res = await customFetch.get("users/admin/stats");
    return res.data;
  } catch (err) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

export const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <StatCard
        title="current user"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaUsers />}
      />
      <StatCard
        title="current jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<LiaClipboardListSolid />}
      />
    </Wrapper>
  );
};
