
import Header from './Header';
import SideBar from './SideBar';
import NotificationList from '../notifications/NotificationList';
import RecentActivity from './RecentActivity';
import { BookOpen, Calendar, DollarSign, FileText } from 'lucide-react';


const profile = {
    username: 'Eli Keli',
    email: 'muthokaelikeli@gmail.com',
    profilePicture: 'https://via.placeholder.com/150'
};

const StudentDashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <Header profile={profile} />
                <h1 className="text-3xl font-bold text-gray-800 my-6">Welcome back, {profile.username}!</h1>
                <div className="p-4 space-y-6">
                    <div className='bg-white shadow-md p-4 rounded'>
                        <p className="mb-4">Here you can:</p>
                        <ul className="list-disc list-inside">
                            <li>View and manage your loan applications.</li>
                            <li>Track your repayment status.</li>
                            <li>Access financial literacy resources.</li>
                        </ul>
                    </div>
                    <NotificationList />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className='bg-white shadow-lg rounded-lg p-4'>
                            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <h2 className="text-sm font-medium">Total Loan Amount</h2>
                                <DollarSign className="h-4 w-4 text-muted" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">$15,000</div>
                                <p className="text-xs text-muted">+2.1% from last month</p>
                            </div>
                        </div>

                        <div className='bg-white shadow-lg rounded-lg p-4'>
                            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <h2 className="text-sm font-medium">Current Semester</h2>
                                <BookOpen className="h-4 w-4 text-muted" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">Fall 2024</div>
                                <p className="text-xs text-muted">2 months remaining</p>
                            </div>
                        </div>

                        <div className='bg-white shadow-lg rounded-lg p-4'>
                            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <h2 className="text-sm font-medium">Next Payment Due</h2>
                                <Calendar className="h-4 w-4 text-muted" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">Oct 15, 2024</div>
                                <p className="text-xs text-muted">$250 monthly payment</p>
                            </div>
                        </div>

                        <div className='bg-white shadow-lg rounded-lg p-4'>
                            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <h2 className="text-sm font-medium">Documents</h2>
                                <FileText className="h-4 w-4 text-muted" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">5 Pending</div>
                                <p className="text-xs text-muted">2 new this week</p>
                            </div>
                        </div>

                    </div>
                    <RecentActivity />


                    {/* <ApplicationForm />
          <DisbursmentSchedule />
          <FundingChart /> */}
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
