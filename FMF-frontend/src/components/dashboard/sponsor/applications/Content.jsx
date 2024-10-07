
const Content = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Student Applications</h1>
            <div className="grid gap-4 grid-cols-2">
                <div className="mb-4">
                    <div>
                        <h2>Alice Johnson</h2>
                    </div>
                    <div>
                        <p>Requested Amount: $5000</p>
                        <p>Status: Pending</p>
                        <div className="mt-4">
                            <button className="btn text-white px-4 py-2 rounded-md mr-2 hover:bg-purple-700 transition">
                                Approve
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div>
                        <h2>Bob Smith</h2>
                    </div>
                    <div>
                        <p>Requested Amount: $7500</p>
                        <p>Status: Under Review</p>
                        <div className="mt-4">
                            <button className="btn text-white px-4 py-2 rounded-md mr-2 hover:bg-purple-700 transition">
                                Approve
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div>
                        <h2>Charlie Brown</h2>
                    </div>
                    <div>
                        <p>Requested Amount: $6000</p>
                        <p>Status: Pending</p>
                        <div className="mt-4">
                            <button className="btn text-white px-4 py-2 rounded-md mr-2 hover:bg-purple-700 transition">
                                Approve
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                                Reject
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Content;