
// components - sponsor
import Content from "../components/dashboard/sponsor/settings/Content";
import SideBar from "../components/dashboard/sponsor/settings/SideBar";

const SpSettings = () => {
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

export default SpSettings;
