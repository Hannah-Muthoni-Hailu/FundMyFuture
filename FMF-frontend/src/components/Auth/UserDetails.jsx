/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Context
import { FormContext } from '../../context/FormContext';
// Utils
// import { validateDealerDetails } from '../../utils/validation';
// Hooks
// import useFormValidation from '../../hooks/useFormValidation';


const StepOneForm = () => {
    const { formData, setFormData } = useContext(FormContext);
    // const { errors, validateForm } = useFormValidation(validateDealerDetails);
    // const [otpVerified, setOtpVerified] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            step1: {
                ...formData.step1,
                [e.target.id]: e.target.value
            }
        });
    };

    // const handleOtpVerification = () => {
    //     // Implement OTP verification logic
    //     setOtpVerified(true);
    //   };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateForm(formData.step1)) {
    //         navigate("/signup/step-two")
    //     }
    // };

    const navigateToNextStep = () => {
        navigate('/signup/step-two');
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            <div className="w-full lg:w-1/4 lg:pt-[160px] bg-purple-800 text-white p-6">
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold">Get started</h2>
                </div>
                <ul className="flex lg:flex-col flex-wrap gap-4 lg:space-x-0 lg:space-y-4 overflow-x-auto">
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                        <span>Authentication</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">The User</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">Financial Details</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">Review & Submit</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">Approval</span>
                    </li>
                </ul>
            </div>
            <div className="w-full lg:w-2/4 p-8 mx-auto flex flex-col justify-center">
                <h2 className="text-orange-700 text-xl font-bold mb-6">STEP 1/4</h2>
                <h3 className="text-xl font-semibold mb-4">Verification Check</h3>


                <form>
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.step1.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                placeholder="First Name"
                            />
                            {/* {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>} */}
                        </div>
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.step1.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                placeholder="Last Name"
                            />
                            {/* {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>} */}
                        </div>
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="password1">Password</label>
                            <input
                                type="password"
                                id="password1"
                                value={formData.step1.password1}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                placeholder="********"
                            />
                            {/* {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>} */}
                        </div>
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="password2">Confirm Password</label>
                            <input
                                type="password"
                                id="password2"
                                value={formData.step1.password2}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                placeholder="********"
                            />
                            {/* {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>} */}
                        </div>
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-2" htmlFor="phoneNumber">Phone Number</label>
                        <div className="flex">
                            <input
                                type="text"
                                id="phoneNumber"
                                value={formData.step1.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                placeholder="+254 712345678"
                            />
                            <button
                                type="button"
                                className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300"
                            >
                                Verify
                            </button>
                        </div>
                        {/* {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>} */}
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">Email Address</label>
                        <div className="flex">
                            <input
                                type="email"
                                id="email"
                                value={formData.step1.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                placeholder="example@gmail.com"
                            />
                            <button
                                type="button"
                                className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300"
                            >
                                Verify
                            </button>
                        </div>
                        {/* {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>} */}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            className="px-4 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 btn"
                            onClick={navigateToNextStep}
                        >
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StepOneForm;

