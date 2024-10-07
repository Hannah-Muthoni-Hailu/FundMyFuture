
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    amount: 4000
  },
  {
    name: 'Feb',
    amount: 3000
  },
  {
    name: 'Mar',
    amount: 5000
  },
  {
    name: 'Apr',
    amount: 4500
  },
  {
    name: 'May',
    amount: 6000
  },
  {
    name: 'Jun',
    amount: 5500
  },
];

const ContributionsChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Contribution Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#571454" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};

export default ContributionsChart;
