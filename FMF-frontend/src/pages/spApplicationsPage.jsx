
// components - sponsor
import Content from "../components/dashboard/sponsor/applications/Content";
import SideBar from "../components/dashboard/sponsor/applications/SideBar";
// import ApplicationDetail from "../components/dashboard/sponsor/applications/ApplicationDetail";
// import ApplicationList from "../components/dashboard/sponsor/applications/ApplicationList";

const SpApplications = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <Content />
                {/* <ApplicationDetail /> */}
                {/* <ApplicationList /> */}
            </main>
        </div>
    );
};

export default SpApplications;
