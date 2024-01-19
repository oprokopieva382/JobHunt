import { LiaClipboardListSolid } from "react-icons/lia";
import { FaClockRotateLeft } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";
import Wrapper from "../assets/wrappers/StatsContainer";
import { StatCard } from "./StatCard";

export const StatsContainer = ({ totalApplicationsByStatus }) => {
  const statsToDisplay = [
    {
      title: "Pending Applications",
      count: totalApplicationsByStatus?.pending || 0,
      icon: <LiaClipboardListSolid />,
      color: "#90caf9",
      bcg: "#e3f2fd",
    },
    {
      title: "Under Interviewing",
      count: totalApplicationsByStatus?.interview || 0,
      icon: <FaClockRotateLeft />,
      color: "#74c69d",
      bcg: "#e4fcee",
    },
    {
      title: "Offers Declined",
      count: totalApplicationsByStatus?.declined || 0,
      icon: <ImBlocked />,
      color: "#f4978e",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {statsToDisplay.map((item) => {
        return <StatCard key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
