/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axiosInstance.post('/login', { email, password });
//             const { access_token } = response.data;
//             localStorage.setItem('access_token', access_token); // Store JWT token
//             navigate('/student/overview');
//             alert("Logged in successfully!");
//             console.log("Access token saved to localStorage.");
//         } catch (error) {
//             console.error(error.response.data);
//             alert('Login failed!');
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
//             <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
//             <form onSubmit={handleLogin}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Email Address</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-3 py-2 border rounded-lg"
//                         required
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full px-3 py-2 border rounded-lg"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300 btn"
//                 >
//                     Login
//                 </button>
//                 <p className="mt-4 text-center">
//                     Dont have an account?{' '}
//                     <Link to="/register" className="text-purple-600 hover:underline">
//                         Sign Up
//                     </Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;





// API
// import { login } from '../../api/authAPI';

// Assets
import illustration from '../../assets/images/illustration.png';

// Context
import { FormContext } from '../../context/FormContext';

// Toast notification
// import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();

    const { formData, setFormData } = useContext(FormContext);

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            login: {
                ...formData.login,
                [e.target.name]: e.target.value,
            },
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await login(formData);
    //         toast.success('Login Successful!');
    //         setTimeout(() => {
    //             navigate('/dashboard');
    //         }, 2000);
    //     } catch (err) {
    //         setError(err.message);
    //     }
    // };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Side */}
            <div className="bg-purple-800 w-full lg:w-1/3 flex items-center justify-center p-12">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h2 className='text-3xl text-white font-semibold text-center'>Empowering the next generation by making education accessible to everyone.</h2>
                    <img src={illustration} alt="illustration" className='mt-7' />
                </div>
            </div>

            {/* Right Side */}
            <div className="bg-white w-full lg:w-2/3 p-12 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Welcome Back {formData.step1.firstName}👋🏾!</h2>

                {
                    error && <div className="text-red-500 mb-4">{error}</div>
                }

                <form className="w-3/4">
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.login.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-600 font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.login.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                            placeholder="********"
                            required
                        />
                        <div className="flex justify-end mt-2">
                            <Link to="/reset" className="text-purple-600 hover:underline">Forgot Password?</Link>
                        </div>
                    </div>

                    <div className="mb-6 flex items-center">
                        <input type="checkbox" id="remember" className="mr-2 leading-tight" />
                        <label htmlFor="remember" className="text-gray-600 text-sm">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300 btn"
                    >
                        Login
                    </button>

                    <p className="mt-4 text-center">
                        Dont have an account?{' '}
                        <Link to="/signup/step-one" className="text-purple-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
