import Header from '../components/landing/Header.jsx';
import Register from '../components/Auth/Register.jsx';
import Footer from '../components/landing/Footer.jsx';

const Registration = () => {
  return (
    <>
      <Header />
      <div className="py-20 bg-purple-100">
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default Registration;
