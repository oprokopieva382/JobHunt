import { MdAddChart } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";

export const links = [
  { text: "add job", path: ".", icon: <MdAddChart /> },
  { text: "all jobs", path: "all-jobs", icon: <FaClipboardList /> },
  { text: "stats", path: "stats", icon: <GiNetworkBars /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  { text: "admin", path: "admin", icon: <RiAdminLine /> },
];
