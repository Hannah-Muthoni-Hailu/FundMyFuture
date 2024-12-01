
import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/hero.png";

const HeroSection = () => {
  return (
    <section id="hero" className="text-white py-20 hero relative bg-purple-600 h-screen">
      <div className="container mx-auto my-52 text-center relative z-10">
        {/* Content */}
        <h1 className="text-5xl font-bold mb-4">Empower Your Education Journey with FundMyFuture</h1>
        <p className="text-lg mb-8">Crowdfund your education, access skill-building opportunities, and connect with funders and mentors—all in one platform.</p>
        <Link
          to="/signup/step-one"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Start Your Journey
        </Link>
        <a
          href="#how-it-works"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 ml-4"
        >
          Learn How it works
        </a>
      </div>
      <img src={HeroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
    </section>
  );
};

export default HeroSection;
