
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-8 bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#hero" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <Link to="/signup/step-one" className="hover:underline">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <span className='text-sm text-red-400'>*Social Media not ready</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Email: support@fundmyfuture.com</p> <span className='text-sm text-red-400'>*Email Not ready </span>
          <p>Phone 1: +254 742 560540</p>
          <p>Phone 2: +254 112100726</p>
          <p>Phone 3: +27 71 613 2455</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 FundMyFuture. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
