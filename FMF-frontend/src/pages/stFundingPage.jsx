
// components - student
import DisbursmentSchedule from "../components/dashboard/charts/DisbursmentSchedule";
import FundingChart from "../components/dashboard/charts/FundingChart";
import SideBar from "../components/dashboard/student/funding/SideBar";

const StFunding = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <FundingChart />
                <DisbursmentSchedule />
            </main>
        </div>
    );
};

export default StFunding;
