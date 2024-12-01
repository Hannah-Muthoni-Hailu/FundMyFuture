import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SmilingImage from '../../assets/images/smiling.jpeg';

const testimonials = [
  {
    name: 'Jane Doe',
    location: 'USA',
    amount: '$5,000 raised',
    quote: 'Thanks to FundMyFuture, I completed my Data Science degree!',
    image: 'https://via.placeholder.com/100', // Placeholder image
  },
  {
    name: 'John Smith',
    location: 'Kenya',
    amount: '$2,000 raised',
    quote: 'Thanks to FundMyFuture, my child can now pursue their dreams of higher education.',
    image: 'https://via.placeholder.com/100',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="py-20 bg-cover h-screen" style={{ backgroundImage: `url(${SmilingImage})` }}>
      <div className="container mx-auto mt-52">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Users Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg text-center mx-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-black italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-orange-500">{testimonial.location} | {testimonial.amount}</p>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            Join Our Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
