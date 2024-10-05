

const Content = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Profile Management</h1>
            <div className="mb-6">
                <div>
                    <h2 className="text-lg font-semibold underline mb-1">Personal Information</h2>
                </div>
                <div>
                    <form>
                        <div className="grid gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <button type="submit" className="btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2 className="text-lg font-semibold underline mb-1">Change Password</h2>
                </div>
                <div>
                    <form>
                        <div className="grid gap-4">
                            <div>
                                <label
                                    htmlFor="current-password"
                                    className="block text-sm font-medium text-gray-700"
                                >Current Password</label>
                                <input
                                    type="password"
                                    id="current-password"
                                    name="current-password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                                <input
                                    type="password"
                                    id="new-password"
                                    name="new-password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <button type="submit" className="btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Content;