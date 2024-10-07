
import { DollarSign, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Overview</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-sm font-medium">Total Contributions</h2>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">$50,000</div>
                        <p className="text-xs text-muted-foreground">10% increase from last month</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-sm font-medium">Pending Requests</h2>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">4 new since last login</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h2 className="text-sm font-medium">Students Supported</h2>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">25</div>
                        <p className="text-xs text-muted-foreground">5 new this semester</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div>
                        <div>
                            <h2 className="text-lg font-semibold underline">Browse Applications</h2>
                        </div>
                        <div className='mb-4'>
                            <p className='mb-4'>View and review pending student applications.</p>
                            <Link to="/sponsor/applications" className="btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                                View Applications
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="text-lg font-semibold underline">Recent Activity</h2>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li>Approved funding for John Doe</li>
                                <li>New application received from Jane Smith</li>
                                <li>Updated contribution for Sam Brown</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;