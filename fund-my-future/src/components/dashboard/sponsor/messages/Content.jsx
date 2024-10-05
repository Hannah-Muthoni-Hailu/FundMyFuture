
const Content = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Messages</h1>
            <div className="space-y-4">
                <div className="mb-4">
                    <div>
                        <h2 className="text-lg">John Doe</h2>
                        <p className="text-sm text-gray-500">2024-10-01</p>
                    </div>
                    <div>
                        <p className="text-gray-700">Thank you for your support...</p>
                        <button className="mt-2 text-purple-600 hover:text-purple-800 transition">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <div>
                        <h2 className="text-lg">Admin</h2>
                        <p className="text-sm text-gray-500">2024-09-30</p>
                    </div>
                    <div>
                        <p className="text-gray-700">New FUnding Opportunity...</p>
                        <button className="mt-2 text-purple-600 hover:text-purple-800 transition">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <div>
                        <h2 className="text-lg">Jane Smith</h2>
                        <p className="text-sm text-gray-500">2024-09-29</p>
                    </div>
                    <div>
                        <p className="text-gray-700">Application Status Update...</p>
                        <button className="mt-2 text-purple-600 hover:text-purple-800 transition">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;