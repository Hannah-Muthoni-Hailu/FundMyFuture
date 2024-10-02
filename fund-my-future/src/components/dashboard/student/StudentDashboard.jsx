
import Header from '../Header';
import SideBar from './SideBar';
import NotificationList from '../NotificationList';


const notifications = [
  { message: "Your application has been approved!" },
  { message: "New funding opportunity available!" }
];


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
        <div className="p-4 space-y-6">
          <div className='bg-white shadow-md p-4 rounded'>
            <p className="mb-4">Here you can:</p>
            <ul className="list-disc list-inside">
              <li>View and manage your loan applications.</li>
              <li>Track your repayment status.</li>
              <li>Access financial literacy resources.</li>
            </ul>
          </div>
          <NotificationList notifications={notifications} />
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
