
import Header from '../student/overview/Header';
import SideBar from './SideBar';
import NotificationList from '../student/notifications/NotificationList';


const notifications = [
    { message: "A new student application is available!" },
    { message: "You contributed to an application!" }
];

// const applications = [
//   { studentName: "John Doe", amount: 2000, reason: "College fees", dateSubmitted: "2024-09-27" },
//   { studentName: "Jane Smith", amount: 1500, reason: "Study material", dateSubmitted: "2024-09-26" }
// ];

const profile = {
    username: 'Sponsor123',
    email: 'sponsor@example.com',
    profilePicture: 'https://via.placeholder.com/150'
};

const Overview = () => {


    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <Header profile={profile} />
                <div className="p-4 space-y-6">
                    <div className='bg-white shadow-md p-4 rounded'>
                        <p className="mb-4">Here you can:</p>
                        <ul className="list-disc list-inside">
                            <li>View students youve sponsored.</li>
                            <li>Manage your contributions.</li>
                            <li>Communicate with sponsored students.</li>
                        </ul>
                    </div>
                    <NotificationList notifications={notifications} />
                </div>
            </main>
        </div>
    );
};

export default Overview;
