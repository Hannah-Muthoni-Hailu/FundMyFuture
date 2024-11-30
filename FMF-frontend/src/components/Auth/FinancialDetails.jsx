/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
// React Router
import { useNavigate } from 'react-router-dom';
// Context
import { FormContext } from '../../context/FormContext';
// Utils
// import { validateDealershipDetails } from '../../utils/validation';
// Hooks
// import useFormValidation from '../../hooks/useFormValidation';

const StepThreeForm = () => {
    const { formData, setFormData } = useContext(FormContext);
    // const { errors, validateForm } = useFormValidation(validateDealershipDetails);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            step3: {
                ...formData.step3,
                [e.target.id]: e.target.value
            }
        });
    };

    const handleToggle = () => {
        setFormData({
            ...formData,
            step3: {
                ...formData.step3,
                provideFinancialDetails: !formData.step3.provideFinancialDetails
            }
        });
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateForm(formData.step3)) {
    //         navigate("/signup/final-step")
    //     }
    // };

    const navigateToPreviousStep = () => {
        navigate('/signup/step-two');
    };

    const navigateToNextStep = () => {
        navigate('/signup/final-step');
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
                        <span className="opacity-40">The User</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                        <span>Financial details</span>
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
                <h2 className="text-orange-700 text-xl font-bold mb-6">STEP 3/4</h2>
                <h3 className="text-xl font-semibold mb-4">Tell us about your financial details</h3>

                <form>
                    {formData.step3.provideFinancialDetails && (
                        <>
                            {formData.step2.role === 'Student' && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="monthlyIncome">
                                            Monthly Income (if applicable)
                                        </label>
                                        <input
                                            type="number"
                                            id="monthlyIncome"
                                            value={formData.step3.monthlyIncome}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                            placeholder="$500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="fundingGap">
                                            Education Funding Gap
                                        </label>
                                        <input
                                            type="number"
                                            id="fundingGap"
                                            value={formData.step3.fundingGap}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                            placeholder="How much do you need to complete your studies?"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="savingsGoal">
                                            Savings Goal or Current Savings
                                        </label>
                                        <input
                                            type="number"
                                            id="savingsGoal"
                                            value={formData.step3.savingsGoal}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                            placeholder="Current savings (if any)"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="bankDetails">
                                            Bank Account/Mobile Money Details (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="bankDetails"
                                            value={formData.step3.bankDetails}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                            placeholder="Bank account or mobile money details"
                                        />
                                    </div>
                                </>
                            )}

                            {formData.step2.role === 'Funder' && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="fundingRange">
                                            Preferred Funding Range
                                        </label>
                                        <input
                                            type="range"
                                            id="fundingRange"
                                            value={formData.step3.fundingRange}
                                            onChange={handleChange}
                                            min="0"
                                            max="10000"
                                            step="100"
                                            className="w-full"
                                            style={{ accentColor: 'purple' }}
                                        />
                                        <span className="block text-gray-700 mt-2">${formData.fundingRange}</span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="fundingFrequency">
                                            Frequency of Funding
                                        </label>
                                        <select
                                            id="fundingFrequency"
                                            value={formData.step3.fundingFrequency}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple-500"
                                        >
                                            <option value="">Select frequency</option>
                                            <option value="One-time">One-time</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Quarterly">Quarterly</option>
                                        </select>
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            <input
                                type="checkbox"
                                checked={!formData.step3.provideFinancialDetails}
                                onChange={handleToggle}
                                className="mr-2"
                            />
                            I prefer not to provide financial details upfront
                        </label>
                    </div>

                    <div className="mb-4">
                        <p className="text-gray-600 text-sm">
                            Your financial details are secure and will be used solely for personalized financial planning.
                        </p>
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

export default StepThreeForm;