import Header from '../components/Header';
import Login from '../components/Auth/Login';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="py-20 bg-purple-100">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
