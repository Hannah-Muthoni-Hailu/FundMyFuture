// src/components/Features.jsx

import { HandCoins, Brain, ChartLine, Presentation } from 'lucide-react';

const features = [
  {
    title: 'Crowdfunding Made Easy',
    description: 'Launch campaigns with minimal setup.',
    icon: <HandCoins size={50} className="text-orange-600 mb-4" />,
  },
  {
    title: 'AI-Powered Recommendations',
    description: 'Get tailored learning resources and funding plans.',
    icon: <Brain size={50} className="text-orange-600 mb-4" />,
  },
  {
    title: 'Mentorship Program',
    description: 'Connect with industry experts.',
    icon: <Presentation size={50} className="text-orange-600 mb-4" />,
  },
  {
    title: 'Transparent Funding',
    description: 'Track fund usage and impact.',
    icon: <ChartLine size={50} className="text-orange-600 mb-4" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg text-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
            >
              <div className="flex items-center">
                <div className="mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
