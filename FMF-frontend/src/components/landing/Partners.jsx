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
    <section className="py-20 bg-purple-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <div className="flex justify-center space-x-8">
          {partners.map((partner, index) => (
            <div key={index}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
