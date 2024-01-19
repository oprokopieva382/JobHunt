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
  console.log(data);
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
          stroke="#d5bdaf"
          fill="#f5ebe0"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
