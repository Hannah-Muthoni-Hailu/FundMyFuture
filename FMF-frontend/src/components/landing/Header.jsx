
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-purple-600">
          <Link to="/">FundMyFuture</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600">
                How It Works
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-purple-600">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-600 hover:text-purple-600">
                FAQ
              </a>
            </li>
            <li>
              <Link to="/login" className="text-purple-600 hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
