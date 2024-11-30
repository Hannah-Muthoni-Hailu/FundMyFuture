import { useNavigate } from 'react-router-dom';
// Assets
import illustration from '../../assets/images/illustration.svg';

function ResetPassword() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
            {/* Left Side */}
            <div className="bg-green-600 w-full lg:w-1/3 flex items-center justify-center p-12">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h2 className='text-3xl text-white font-semibold'>Your place to Work. Plan. Create. Control.</h2>
                    <img src={illustration} alt="illustration" className='mt-7' />
                </div>
            </div>

            {/* Right Side  */}
            <div className="w-full lg:w-2/3 bg-white p-12 flex items-center justify-center">
                <div className="w-full max-w-lg">
                    <h2 className="text-gray-700 text-xl font-semibold mb-6 text-center">Reset Password</h2>

                    <form>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">Email Address</label>
                            <div className="flex">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-green-500"
                                    placeholder="example@gmail.com"
                                />
                                <button
                                    type="button"
                                    className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 focus:outline-none"
                                >
                                    Verify
                                </button>
                            </div>
                        </div>

                        {/* Passwords Field */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 mb-2"
                                htmlFor="new-password"
                            >
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="new-password"
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    placeholder="********"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 mb-2"
                                htmlFor="confirm-password"
                            >
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="w-full border border-gray-300 p-3 rounded-lg"
                                    placeholder="********"
                                />
                            </div>
                        </div>

                        {/* Reset Code Field */}
                        <div className="mb-4 text-green-600">
                            <p className="bg-green-100 p-3 rounded-lg">
                                <span className="font-bold">i</span> Reset code was sent to your email.
                                <br /> It will be valid for 01:25
                            </p>
                        </div>


                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                                onClick={navigateToLogin}
                            >
                                Done
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword