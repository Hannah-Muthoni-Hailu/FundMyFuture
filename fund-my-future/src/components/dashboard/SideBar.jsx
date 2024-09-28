/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const links = role === 'student' ? [
    { to: '/student/overview', label: 'Overview' },
    { to: '/student/applications', label: 'Applications' },
    { to: '/student/profile', label: 'Profile' },
  ] : [
    { to: '/sponsor/overview', label: 'Overview' },
    { to: '/sponsor/applications', label: 'Browse Applications' },
    { to: '/sponsor/contributions', label: 'Contributions' },
  ];

  return (
    <section className="w-64 text-white h-screen p-4 sidebar">
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.to} className="mb-4">
              <Link to={link.to} className="text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
