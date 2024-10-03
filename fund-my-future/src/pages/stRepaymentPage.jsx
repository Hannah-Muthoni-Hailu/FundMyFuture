
// components - student
import SideBar from "../components/dashboard/student/repayment/SideBar";

const StRepayment = () => {
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

export default StRepayment;
