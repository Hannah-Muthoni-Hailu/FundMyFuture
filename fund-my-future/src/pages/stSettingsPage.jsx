
// components - student
import SideBar from "../components/dashboard/student/settings/SideBar";

const StSettings = () => {
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

export default StSettings;
