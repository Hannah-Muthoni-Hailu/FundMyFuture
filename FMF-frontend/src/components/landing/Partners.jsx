// src/components/Partners.jsx

const partners = [
  {
    name: 'Partner 1',
    logo: 'https://via.placeholder.com/150', // Placeholder logo; replace with actual logos.
  },
  {
    name: 'Partner 2',
    logo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Partner 3',
    logo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Partner 4',
    logo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Partner 5',
    logo: 'https://via.placeholder.com/150',
  }
];

const Partners = () => {
  return (
    <section className="py-20 bg-slate-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by Leading Organizations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto rounded-full"
              />
              <h1 className="text-lg font-semibold">{partner.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
