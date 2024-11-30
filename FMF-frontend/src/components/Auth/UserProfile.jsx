/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Context
import { FormContext } from '../../context/FormContext';
// Utils
// import { validateDealerProfile } from '../../utils/validation';
// Hooks
// import useFormValidation from '../../hooks/useFormValidation';

const StepTwoForm = () => {
    const { formData, setFormData } = useContext(FormContext);
    // const { errors, validateForm } = useFormValidation(validateDealerProfile);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            step2: {
                ...formData.step2,
                [e.target.id]: e.target.value
            }
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profilePicture: e.target.files[0]
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateForm(formData.step2)) {
    //         navigate("/signup/step-three")
    //     }
    // };

    const navigateToPreviousStep = () => {
        navigate('/signup/step-one');
    };

    const navigateToNextStep = () => {
        navigate('/signup/step-three');
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            <div className="w-full lg:w-1/4 lg:pt-[160px] bg-purple-800 text-white p-6">
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold">Get started</h2>
                </div>
                <ul className="flex lg:flex-col flex-wrap gap-4 lg:space-x-0 lg:space-y-4 overflow-x-auto">
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">Authentication</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                        <span>The User</span>
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
                <h2 className="text-orange-700 text-xl font-bold mb-6">STEP 2/4</h2>
                <h3 className="text-xl font-semibold mb-4">Tell us about yourself</h3>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="role">
                            What describes you best?
                        </label>
                        <select
                            id="role"
                            value={formData.step2.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                        >
                            <option value="">Select your role</option>
                            <option value="Student">Student</option>
                            <option value="Funder">Funder</option>
                            <option value="Mentor">Mentor</option>
                        </select>
                    </div>

                    {formData.step2.role === 'Student' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.step2.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    value={formData.step2.dateOfBirth}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="gender">
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    value={formData.step2.gender}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                >
                                    <option value="">Select your gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="educationLevel">
                                    Education Level
                                </label>
                                <select
                                    id="educationLevel"
                                    value={formData.step2.educationLevel}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                >
                                    <option value="">Select your education level</option>
                                    <option value="Primary">Primary</option>
                                    <option value="Secondary">Secondary</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Postgraduate">Postgraduate</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="areaOfStudy">
                                    Area of Study
                                </label>
                                <input
                                    type="text"
                                    id="areaOfStudy"
                                    value={formData.step2.areaOfStudy}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                        </>
                    )}

                    {formData.step2.role === 'Funder' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.step2.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="organization">
                                    Organization (if applicable)
                                </label>
                                <input
                                    type="text"
                                    id="organization"
                                    value={formData.step2.organization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="fundingCauses">
                                    Preferred Funding Causes
                                </label>
                                <input
                                    type="text"
                                    id="fundingCauses"
                                    value={formData.step2.fundingCauses}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                        </>
                    )}

                    {formData.step2.role === 'Mentor' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.step2.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="professionalField">
                                    Professional Field
                                </label>
                                <input
                                    type="text"
                                    id="professionalField"
                                    value={formData.step2.professionalField}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="yearsOfExperience">
                                    Years of Experience
                                </label>
                                <input
                                    type="number"
                                    id="yearsOfExperience"
                                    value={formData.step2.yearsOfExperience}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="mentorshipAreas">
                                    Preferred Mentorship Areas
                                </label>
                                <input
                                    type="text"
                                    id="mentorshipAreas"
                                    value={formData.step2.mentorshipAreas}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                        </>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="profilePicture">
                            Upload Profile Picture (Optional)
                        </label>
                        <input
                            type="file"
                            id="profilePicture"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="button"
                            onClick={navigateToPreviousStep}
                            className="bg-gray-200 text-gray-700 rounded-md p-2"
                        >
                            Previous
                        </button>
                        <button
                            type="submit"
                            className="px-4 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 btn"
                            onClick={navigateToNextStep}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StepTwoForm;