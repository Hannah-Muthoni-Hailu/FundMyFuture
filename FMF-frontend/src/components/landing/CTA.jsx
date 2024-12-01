import { Link } from 'react-router-dom';
import CTA from '../../assets/images/CTA.png'

const CallToAction = () => {
  return (
    <section className="text-white newsletter py-20 relative bg-purple-600">
      <div className="container mx-auto my-52 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Your Future Starts Here. Are You Ready?</h2>
        <Link to="/signup/step-one" className="bg-white text-purple-600 py-3 px-6 rounded-lg text-lg font-semibold">
          Sign Up Now
        </Link>
      </div>
      <img src={CTA} alt="CTA" className="absolute inset-0 w-full h-full object-cover opacity-50" />
    </section>
  );
};

export default CallToAction;