import ContributionsChart from "../../charts/ContributionsChart";


const Content = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Reports</h1>
            <ContributionsChart />
            <div className="bg-white shadow-md rounded-lg p-4 mt-3">
                <div>
                    <h2>Detailed Reports</h2>
                </div>
                <div>
                    <ul className="space-y-2">
                        <li>
                            <button className="text-purple-600 hover:text-purple-800 transition">
                                Download Contribution History (PDF)
                            </button>
                        </li>
                        <li>
                            <button className="text-purple-600 hover:text-purple-800 transition">
                                Download Student Impact Report (Excel)
                            </button>
                        </li>
                        <li>
                            <button className="text-purple-600 hover:text-purple-800 transition">
                                Download Tax Statement (PDF)
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Content;