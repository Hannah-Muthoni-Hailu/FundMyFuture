import { useState } from 'react';
import api, { setAuthToken } from '../../api/axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      const { access_token } = response.data;
      setAuthToken(access_token);
      navigate('/');
    } catch (error) {
      console.error(error.response.data);
      alert('Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300 btn"
                >
                    Login
                </button>
                <p className="mt-4 text-center">
                    Dont have an account?{' '}
                    <Link to="/register" className="text-purple-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
  );
};

export default Login;
