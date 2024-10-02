// src/components/Features.jsx

const features = [
  {
    title: 'Flexible Payment Plans',
    description: 'Choose a payment plan that suits your needs.',
    icon: '💳', // You can replace this with an actual icon from a library like FontAwesome or Material Icons.
  },
  {
    title: 'Low-Interest Rates',
    description: 'Get the most affordable rates in the market.',
    icon: '💰',
  },
  {
    title: 'Easy Application Process',
    description: 'Apply online in just a few minutes.',
    icon: '📝',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-orange-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
