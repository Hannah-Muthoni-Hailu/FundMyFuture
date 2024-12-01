import { GraduationCap, DollarSign, BookOpen } from 'lucide-react';

const audienceSegments = [
    {
        title: 'Students',
        icon: <GraduationCap size={50} className="text-purple-600 mb-4" />,
        description: 'Get the education you deserve with financial and skill-building support.',
    },
    {
        title: 'Funders',
        icon: <DollarSign size={50} className="text-purple-600 mb-4" />,
        description: 'Invest in future leaders and track your impact.',
    },
    {
        title: 'Mentors',
        icon: <BookOpen size={50} className="text-purple-600 mb-4" />,
        description: 'Empower the next generation with your expertise.',
    },
];

const TargetAudience = () => {
    return (
        <section id="target-audience" className="py-20 bg-slate-100 h-[65vh] flex items-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Who We Serve</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {audienceSegments.map((segment, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            {segment.icon}
                            <h3 className="text-2xl font-semibold mb-2">{segment.title}</h3>
                            <p className="text-gray-600">{segment.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;