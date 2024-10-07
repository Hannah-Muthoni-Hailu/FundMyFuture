
// components - student
import ApplicationForm from "../components/dashboard/student/applications/ApplicationForm";
import SideBar from "../components/dashboard/student/applications/SideBar";

const StApplication = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <ApplicationForm />
            </main>
        </div>
    );
};

export default StApplication;
