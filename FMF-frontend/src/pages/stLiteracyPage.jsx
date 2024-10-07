
// components - student
import Content from "../components/dashboard/student/literacy/Content";
import SideBar from "../components/dashboard/student/literacy/SideBar";

const StLiteracy = () => {
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

export default StLiteracy;
