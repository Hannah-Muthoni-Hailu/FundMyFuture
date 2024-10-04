
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const loanData = [
    {
        name: 'Jan',
        amount: 500
    },
    {
        name: 'Feb',
        amount: 1000
    },
    {
        name: 'Mar',
        amount: 1500
    },
    {
        name: 'Apr',
        amount: 2000
    },
    {
        name: 'May',
        amount: 2500
    },
    {
        name: 'Jun',
        amount: 3000
    },
];

const DisbursmentSchedule = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Loan Disbursment Schedule</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={loanData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#571454" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DisbursmentSchedule