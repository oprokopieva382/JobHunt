import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";

export const VerticalChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar
          fill="#DFC6A7"
          barSize={75}
          dataKey="count"
          background={{ fill: "#e0e1dd" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
