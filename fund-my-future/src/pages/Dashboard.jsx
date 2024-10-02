// src/pages/Dashboard.jsx
import Header from '../components/landing/Header';
import DashboardContent from '../components/DashBoardContent';
import Footer from '../components/landing/Footer';

const Dashboard = () => {
  
  const userType = 'sponsor'; 

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
