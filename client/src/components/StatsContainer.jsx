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
      color: "#0077b6",
      bcg: "#daecf8",
    },
    {
      title: "Under Interviewing",
      count: totalApplicationsByStatus?.interview || 0,
      icon: <FaClockRotateLeft />,
      color: "#57cc99",
      bcg: "#e4fcee",
    },
    {
      title: "Offers Declined",
      count: totalApplicationsByStatus?.declined || 0,
      icon: <ImBlocked />,
      color: "#a4133c",
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
