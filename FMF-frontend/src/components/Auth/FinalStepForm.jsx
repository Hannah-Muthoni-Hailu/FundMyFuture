/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../context/FormContext';

const FinalStepForm = () => {
    const navigate = useNavigate();

    const { formData } = useContext(FormContext);

    const [error, setError] = useState(null);

    const navigateToStep = (step) => {
        navigate(`/signup/step-${step}`);
    };

    const navigateToNextStep = () => {
        navigate('/signup/approve');
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
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">The Dealer</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">The Dealership</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                        <span>Review & Submit</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white opacity-40 rounded-full mr-3"></div>
                        <span className="opacity-40">Approval</span>
                    </li>
                </ul>
            </div>
            <div className="w-full lg:w-2/4 p-8 m-auto">
                <h2 className="text-orange-700 text-xl font-bold mb-6">STEP 4/4</h2>
                <h3 className="text-xl font-semibold mb-4">Review and Submit</h3>

                {/* Display Errors */}
                {error && (
                    <div className="text-red-500 mb-4">
                        {/* Display errors for each step */}
                        {Object.entries(error).map(([field, messages]) => (
                            <div key={field}>
                                <strong>{field.replace('_errors', '').toUpperCase()} Errors:</strong>
                                <ul>
                                    {Object.entries(messages).map(([subField, subMessages]) => (
                                        <li key={subField}>
                                            {subField}: {subMessages.join(', ')}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                <form>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">Step 1: Authentication</h4>
                        <p>First Name: <span className="text-purple-700 underline">{formData.step1.firstName}</span></p>
                        <p>Last Name: <span className="text-purple-700 underline">{formData.step1.lastName}</span></p>
                        <p>Email: <span className="text-purple-700 underline">{formData.step1.email}</span></p>
                        <p>Phone Number: <span className="text-purple-700 underline">{formData.step1.phoneNumber}</span></p>
                        <button type="button" onClick={() => navigateToStep("one")} className="text-blue-500 underline">Edit</button>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">Step 2: {formData.step2.role}</h4>
                        <p>Full Name: <span className="text-purple-700 underline">{formData.step2.fullName}</span></p>
                        <p>Date of Birth: <span className="text-purple-700 underline">{formData.step2.dateOfBirth}</span></p>
                        <p>Gender: <span className="text-purple-700 underline">{formData.step2.gender}</span></p>
                        {formData.step2.role === 'Student' && (
                            <>
                                <p>Education Level: <span className="text-purple-700 underline">{formData.step2.educationLevel}</span></p>
                                <p>Area of Study: <span className="text-purple-700 underline">{formData.step2.areaOfStudy}</span></p>
                            </>
                        )}
                        {formData.step2.role === 'Funder' && (
                            <>
                                <p>Organization: <span className="text-purple-700 underline">{formData.step2.organization}</span></p>
                                <p>Funding Causes: <span className="text-purple-700 underline">{formData.step2.fundingCauses}</span></p>
                            </>
                        )}
                        {formData.step2.role === 'Mentor' && (
                            <>
                                <p>Professional Field: <span className="text-purple-700 underline">{formData.step2.professionalField}</span></p>
                                <p>Years of Experience: <span className="text-purple-700 underline">{formData.step2.yearsOfExperience}</span></p>
                                <p>Mentorship Areas: <span className="text-purple-700 underline">{formData.step2.mentorshipAreas}</span></p>
                            </>
                        )}
                        <button type="button" onClick={() => navigateToStep("two")} className="text-blue-500 underline">Edit</button>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">Step 3: Financial Details</h4>
                        <p>Monthly Income: <span className="text-purple-700 underline">{formData.step3.monthlyIncome}</span></p>
                        <p>Funding Gap: <span className="text-purple-700 underline">{formData.step3.fundingGap}</span></p>
                        <p>Savings Goal: <span className="text-purple-700 underline">{formData.step3.savingsGoal}</span></p>
                        <p>Bank Details: <span className="text-purple-700 underline">{formData.step3.bankDetails}</span></p>
                        <p>Funding Range: <span className="text-purple-700 underline">{formData.step3.fundingRange}</span></p>
                        <p>Funding Frequency: <span className="text-purple-700 underline">{formData.step3.fundingFrequency}</span></p>
                        <p>Provide Financial Details: <span className="text-purple-700 underline">{formData.step3.provideFinancialDetails ? 'Yes' : 'No'}</span></p>
                        <button type="button" onClick={() => navigateToStep("three")} className="text-blue-500 underline">Edit</button>
                    </div>
                </form>

                <button onClick={navigateToNextStep} className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default FinalStepForm;