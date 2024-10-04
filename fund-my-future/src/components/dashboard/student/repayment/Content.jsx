
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

const repaymentData = [
    {
        month: 'Jan',
        amount: 250
    },
    {
        month: 'Feb',
        amount: 250
    },
    {
        month: 'Mar',
        amount: 250
    },
    {
        month: 'Apr',
        amount: 250
    },
    {
        month: 'May',
        amount: 250
    },
    {
        month: 'Jun',
        amount: 250
    },
];

const Content = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Repayment Status</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-sm font-medium">Total Loan Balance</h2>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">$14,250</div>
                        <p className="text-xs text-muted-foreground">Decreased by $750 this year</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-sm font-medium">Next Payment Due</h2>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">Oct 15, 2024</div>
                        <p className="text-xs text-muted-foreground">$250 monthly payment</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-sm font-medium">Interest Rate</h2>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">4.5%</h2>
                        <p className="text-xs text-muted-foreground">Fixed rate for your loan term</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-md font-medium">Repayment Status</h2>
                        <AlertCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-green-500">On Track</div>
                        <p className="text-xs text-muted-foreground">Keep up the good work!</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div>
                    <h2 className='text-xl font-semibold'>Repayment History</h2>
                </div>
                <div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={repaymentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="amount" fill="#571454" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <div>
                        <h2 className='text-xl font-semibold underline'>Repayment Options</h2>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li>Standard Repayment: $250/month for 10 years</li>
                            <li>Graduated Repayment: Starting at $150/month, increasing every 2 years</li>
                            <li>Income-Based Repayment: Payments based on your income</li>
                        </ul>
                        <button className="mt-4 btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                            Change Repayment Plan
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='text-xl font-semibold underline'>Loan Details</h2>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li><strong>Loan Type:</strong> Federal Subsidized</li>
                            <li><strong>Disbursement Date:</strong> August 15, 2023</li>
                            <li><strong>Repayment Start Date:</strong> February 15, 2024</li>
                            <li><strong>Loan Term:</strong> 10 years</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;