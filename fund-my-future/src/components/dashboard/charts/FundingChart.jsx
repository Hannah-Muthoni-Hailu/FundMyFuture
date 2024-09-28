import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', amount: 500 },
  { month: 'Feb', amount: 700 },
  { month: 'Mar', amount: 1200 },
];

const FundingChart = () => {
  return (
    <div className="chart-container">
      <h2 className="text-xl font-semibold mb-4">Funding Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FundingChart;
