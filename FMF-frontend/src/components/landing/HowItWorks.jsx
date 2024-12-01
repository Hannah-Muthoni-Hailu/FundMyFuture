
import { UserPlus2, Rocket, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    step: '1',
    title: 'Sign Up and Create a Profile',
    description: 'Create an account and get started with our easy application process.',
    icon: <UserPlus2 size={50} className="text-purple-600 mb-4" />,
  },
  {
    step: '2',
    title: 'Launch a Crowdfunding Campaign or Explore Skill-Building Resources',
    description: 'Fund your education or explore opportunities to build your skills and connect with mentors.',
    icon: <Rocket size={50} className="text-purple-600 mb-4" />,
  },
  {
    step: '3',
    title: 'Get Funded, Learn, and Grow.',
    description: 'Get funded, learn new skills, and grow your network with FundMyFuture.',
    icon: <GraduationCap size={50} className="text-purple-600 mb-4" />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center relative">
              {step.icon}
              <div className="text-4xl font-bold text-purple-600 mb-4">{step.step}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/signup/step-one" className="bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
