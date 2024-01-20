import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const HorizontalChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          stackId="1"
          stroke="#C18B56"
          fill="#DFC6A7"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
