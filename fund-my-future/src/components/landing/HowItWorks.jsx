
const steps = [
  {
    step: '1',
    title: 'Sign Up',
    description: 'Create an account and get started with our easy application process.',
  },
  {
    step: '2',
    title: 'Apply for Financing',
    description: 'Fill out a quick form and choose the financing plan that works for you.',
  },
  {
    step: '3',
    title: 'Get Funded',
    description: 'Receive the funds you need to pursue your education goals.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-orange-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
