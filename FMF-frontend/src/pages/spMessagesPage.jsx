
// components - sponsor
import Content from "../components/dashboard/sponsor/messages/Content";
import SideBar from "../components/dashboard/sponsor/messages/SideBar";

const SpMessages = () => {
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

export default SpMessages;
