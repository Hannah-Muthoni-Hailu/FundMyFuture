
const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Student',
    quote: 'FundMyFuture helped me afford college without the stress of overwhelming debt.',
    image: 'https://via.placeholder.com/100', // Placeholder image
  },
  {
    name: 'John Smith',
    role: 'Parent',
    quote: 'Thanks to FundMyFuture, my child can now pursue their dreams of higher education.',
    image: 'https://via.placeholder.com/100',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-purple-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
