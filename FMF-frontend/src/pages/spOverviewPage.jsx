
// components - sponsor
import Content from "../components/dashboard/sponsor/overview/Content";
import Header from "../components/dashboard/sponsor/overview/Header";
import SideBar from "../components/dashboard/sponsor/overview/SideBar";

const profile = {
    username: 'Sarah',
    email: 'sponsor@example.com',
    profilePicture: 'https://via.placeholder.com/150'
};

const SpOverview = () => {
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
                            <li>View students youve sponsored.</li>
                            <li>Manage your contributions.</li>
                            <li>Communicate with sponsored students.</li>
                        </ul>
                    </div>
                    <Content />
                </div>
            </main>
        </div>
    );
};

export default SpOverview;
