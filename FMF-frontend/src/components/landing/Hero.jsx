
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="text-white py-20 hero">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Affordable Education Financing for All</h1>
        <p className="text-lg mb-8">Empowering the next generation by making education accessible to everyone.</p>
        <Link
          to="/register"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
