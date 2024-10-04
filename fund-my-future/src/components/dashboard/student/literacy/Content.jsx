
import { Book, Video, FileText, Calculator } from 'lucide-react';

const resources = [
    {
        title: 'Budgeting Basics',
        icon: Calculator,
        description: 'Learn how to create and stick to a budget'
    },
    {
        title: 'Understanding Student Loans',
        icon: FileText,
        description: 'Comprehensive guide to student loan terms and repayment options'
    },
    {
        title: 'Investing 101',
        icon: Book,
        description: 'Introduction to investing for students and recent graduates'
    },
    {
        title: 'Credit Score Essentials',
        icon: Video,
        description: 'Video series on building and maintaining a good credit score'
    },
];

const Content = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Financial Literacy Resources</h1>

            <p className="mb-8 text-lg">Enhance your financial knowledge with these curated resources designed to help you make informed decisions about your education financing and future financial health.</p>

            <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                    <div key={index} className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex flex-row items-center space-x-4">
                            <resource.icon className="h-8 w-8 text-purple-600" />
                            <div>{resource.title}</div>
                        </div>
                        <div>
                            <p>{resource.description}</p>
                            <button className="mt-4 btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Financial Wellness Assessment</h2>
                <p className="mb-4">Take our quick assessment to gauge your financial literacy and receive personalized recommendations:</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition text-lg font-semibold">
                    Start Assessment
                </button>
            </div>
        </div>
    );
};

export default Content;