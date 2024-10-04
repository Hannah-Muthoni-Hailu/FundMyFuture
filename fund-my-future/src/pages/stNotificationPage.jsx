
// components - student
import Content from "../components/dashboard/student/notifications/Content";
import NotificationList from "../components/dashboard/student/notifications/NotificationList";
import SideBar from "../components/dashboard/student/notifications/SideBar";

const StNotification = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <NotificationList />
                <Content />
            </main>
        </div>
    );
};

export default StNotification;
