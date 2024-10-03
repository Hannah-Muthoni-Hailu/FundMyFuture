
// components - student
import SideBar from "../components/dashboard/student/notifications/SideBar";

const StNotification = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                
            </main>
        </div>
    );
};

export default StNotification;
