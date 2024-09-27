// src/pages/Dashboard.jsx
import Header from '../components/Header';
import DashboardContent from '../components/DashboardContent';
import Footer from '../components/Footer';

const Dashboard = () => {
  // This should be determined based on the logged-in user's data
  const userType = 'student'; // or 'sponsor'

  return (
    <>
      <Header />
      <div className="py-20 bg-gray-100">
        <DashboardContent userType={userType} />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
