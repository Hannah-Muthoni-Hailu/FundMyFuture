

import Header from './Header';
import Sidebar from './Sidebar';
import ContributionsChart from './charts/ContributionsChart';
import ApplicationList from './ApplicationList';
import ProfileCard from './ProfileCard';
import NotificationList from './NotificationList';
import ApplicationDetail from './ApplicationDetail';
// import { useState } from 'react';


const notifications = [
  { message: "A new student application is available!" },
  { message: "You contributed to an application!" }
];

const applications = [
  { studentName: "John Doe", amount: 2000, reason: "College fees", dateSubmitted: "2024-09-27" },
  { studentName: "Jane Smith", amount: 1500, reason: "Study material", dateSubmitted: "2024-09-26" }
];

const profile = {
  username: 'Sponsor123',
  email: 'sponsor@example.com',
  profilePicture: 'https://via.placeholder.com/150'
};

const SponsorDashboard = () => {
  // const [selectedApplication, setSelectedApplication] = useState(null);

  // const handleApplicationClick = (application) => {
  //   setSelectedApplication(application);
  // };

  return (
    <div className="flex">
      <Sidebar role="sponsor" />
      <main className="flex-1 p-8">
        <Header profile={profile} />
        <div className="p-4 space-y-6">

          <ProfileCard profile={profile} />
          <NotificationList notifications={notifications} />.
          <ApplicationList  />

          {/* {selectedApplication && (
            <ApplicationDetail application={selectedApplication} />
          )} */}
          <ApplicationDetail application={applications} />

          <ContributionsChart />
        </div>
      </main>
    </div>
  );
};

export default SponsorDashboard;
