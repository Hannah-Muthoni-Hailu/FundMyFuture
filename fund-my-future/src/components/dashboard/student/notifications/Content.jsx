
import { Bell, DollarSign, FileText, BookOpen } from 'lucide-react';

const notifications = [
    {
        icon: DollarSign,
        title: 'Loan Disbursement',
        message: 'Your loan of $5,000 has been disbursed to your account.',
        date: '2024-09-01'
    },
    {
        icon: FileText,
        title: 'Document Required',
        message: 'Please upload your latest transcript by September 15, 2024.',
        date: '2024-09-05'
    },
    {
        icon: BookOpen,
        title: 'New Financial Literacy Course',
        message: 'A new course on investment basics is now available.',
        date: '2024-09-10'
    },
    {
        icon: Bell,
        title: 'Payment Reminder',
        message: 'Your next loan payment of $250 is due on October 15, 2024.',
        date: '2024-09-30'
    },
];

const Content = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Notifications</h1>

            <div className="space-y-4">
                {notifications.map((notification, index) => (
                    <div key={index}>
                        <div className="flex items-start p-4">
                            <notification.icon className="w-6 h-6 mr-4 text-purple-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">{notification.title}</h3>
                                <p className="text-gray-600">{notification.message}</p>
                                <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                Mark All as Read
            </button>
        </div>
    );
};

export default Content;