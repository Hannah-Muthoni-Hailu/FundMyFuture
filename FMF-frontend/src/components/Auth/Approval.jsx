/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Approval = ({ userRole }) => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        if (userRole === 'Student') {
            setStatus('underReview');
        } else {
            setStatus('approved');
        }
    }, [userRole]);

    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-orange-700 text-xl font-bold mb-2">FINAL</h2>
            <h3 className="text-2xl font-semibold mb-8">Approvals</h3>

            {status === 'underReview' && (
                <>
                    <div className="flex items-center justify-center w-40 h-40 border-4 border-purple-800 rounded-full mb-8">
                        <svg
                            className="w-24 h-24 text-purple-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3M12 2a10 10 0 110 20 10 10 0 010-20z"
                            />
                        </svg>
                    </div>
                    <p className="text-gray-700 text-lg mb-8 text-center">
                        Application Under Review. Estimated review time: 1–3 business days.
                    </p>
                </>
            )}

            {status === 'approved' && (
                <>
                    <div className="flex items-center justify-center w-40 h-40 border-4 border-green-800 rounded-full mb-8">
                        <svg
                            className="w-24 h-24 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <p className="text-gray-700 text-lg mb-8 text-center">
                        Your application has been approved! You can now access your dashboard.
                    </p>
                </>
            )}

            <button onClick={navigateToLogin} className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600">
                Finish
            </button>
        </div>
    );
};

export default Approval;
