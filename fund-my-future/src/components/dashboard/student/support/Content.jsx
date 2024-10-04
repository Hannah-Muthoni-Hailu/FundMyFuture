
import { MessageCircle, Phone, Mail, FileQuestion } from 'lucide-react';

const faqs = [
    {
        question: "How do I apply for a loan?",
        answer: "You can apply for a loan by navigating to the 'Apply for Funding' section in your dashboard and following the application process."
    },
    {
        question: "When do I start repaying my loan?",
        answer: "Typically, loan repayment begins 6 months after graduation or when you drop below half-time enrollment."
    },
    {
        question: "Can I change my repayment plan?",
        answer: "Yes, you can change your repayment plan by going to the 'Repayment Status' page and selecting 'Change Repayment Plan'."
    },
    {
        question: "How can I update my personal information?",
        answer: "You can update your personal information in the 'Profile' section of your account."
    },
];

const Content = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Support Center</h1>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                    <div>
                        <div className="flex items-center">
                            <MessageCircle className="w-5 h-5 mr-2 text-purple-600" /> 
                            <h2 className='text-lg font-semibold underline'>Live Chat</h2>
                        </div>
                    </div>
                    <div>
                        <p>Chat with our support team in real-time.</p>
                        <button className="mt-4 btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                            Start Chat
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 mr-2 text-purple-600" />
                            <h2 className='text-lg font-semibold underline'>Phone Support</h2>
                        </div>
                    </div>
                    <div>
                        <p>Call us at: 011345678</p>
                        <p className="text-sm text-gray-500">Available Mon-Fri, 9am-5pm EST</p>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <div>
                    <div className="flex items-center mb-4">
                        <Mail className="w-5 h-5 mr-2 text-purple-600" /> 
                        <h2 className='text-lg font-semibold underline'>Email Support</h2>
                    </div>
                </div>
                <div>
                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex items-center">
                        <FileQuestion className="w-5 h-5 mr-2 text-purple-600" /> 
                        <h2 className='text-lg font-semibold underline'>Frequently Asked Questions</h2>
                    </div>
                </div>
                <div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;