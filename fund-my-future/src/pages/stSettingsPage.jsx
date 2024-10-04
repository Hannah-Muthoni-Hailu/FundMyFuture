
// components - student
import Content from "../components/dashboard/student/settings/Content";
import SideBar from "../components/dashboard/student/settings/SideBar";

const StSettings = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <Content />
            </main>
        </div>
    );
};

export default StSettings;
