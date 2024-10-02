
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 FundMyFuture. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
