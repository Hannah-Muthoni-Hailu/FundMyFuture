
// components - sponsor
import Content from "../components/dashboard/sponsor/reports/Content";
import SideBar from "../components/dashboard/sponsor/reports/SideBar";

const SpReports = () => {
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

export default SpReports;
