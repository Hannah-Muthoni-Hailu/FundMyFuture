
import { User, Mail, Phone, School, Calendar } from 'lucide-react';

const Content = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <div>
                        <h2 className='text-xl font-semibold underline mb-4'>Personal Information</h2>
                    </div>
                    <div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-3 text-purple-600" />
                                <span>Eli Keli</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-purple-600" />
                                <span>muthokaelikeli.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-purple-600" />
                                <span>+254742560540</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                                <span>Born: January 15, 1998</span>
                            </div>
                        </div>
                        <button className="mt-6 btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                            Edit Personal Information
                        </button>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-xl font-semibold underline mb-4'>Academic Information</h2>
                    </div>
                    <div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <School className="w-5 h-5 mr-3 text-purple-600" />
                                <span>University of Example</span>
                            </div>
                            <div>
                                <strong>Major:</strong> Computer Science
                            </div>
                            <div>
                                <strong>Expected Graduation:</strong> May 2025
                            </div>
                            <div>
                                <strong>Student ID:</strong> 123456789
                            </div>
                        </div>
                        <button className="mt-6 btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                            Update Academic Information
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;