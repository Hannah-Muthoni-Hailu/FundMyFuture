
import Header from './Header';
import Sidebar from './Sidebar';
import FundingChart from './charts/FundingChart';
import ApplicationForm from './ApplicationForm';
import ProfileCard from './ProfileCard';
import ContributionsChart from './charts/ContributionsChart';
import ApplicationList from './ApplicationList';
import NotificationList from './NotificationList';


const notifications = [
  { message: "Your application has been approved!" },
  { message: "New funding opportunity available!" }
];

const applications = [
  { studentName: "John Doe", amount: 2000, reason: "College fees" },
  { studentName: "Jane Smith", amount: 1500, reason: "Study material" }
];

const profile = {
  username: 'JohnDoe',
  email: 'john@example.com',
  profilePicture: 'https://via.placeholder.com/150'
};

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="student" />
      <main className="flex-1 p-8">
        <Header profile={profile} />
        <div className="p-4 space-y-6">
          <ProfileCard profile={profile} />
          <NotificationList notifications={notifications} />
          <ApplicationForm />
          <ApplicationList applications={applications} />
          <ContributionsChart />
          <FundingChart />
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
