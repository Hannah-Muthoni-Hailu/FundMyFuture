/* eslint-disable react/prop-types */
// src/components/DashboardContent.jsx

const DashboardContent = ({ userType }) => {
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
            {userType === 'student' ? (
                <div>
                    <p className="mb-4">Here you can:</p>
                    <ul className="list-disc list-inside">
                        <li>View and manage your loan applications.</li>
                        <li>Track your repayment status.</li>
                        <li>Access financial literacy resources.</li>
                    </ul>
                </div>
            ) : userType === 'sponsor' ? (
                <div>
                    <p className="mb-4">Here you can:</p>
                    <ul className="list-disc list-inside">
                        <li>View students youve sponsored.</li>
                        <li>Manage your contributions.</li>
                        <li>Communicate with sponsored students.</li>
                    </ul>
                </div>
            ) : (
                <p>Please select a user type.</p>
            )}
        </div>
    );
};

export default DashboardContent;
