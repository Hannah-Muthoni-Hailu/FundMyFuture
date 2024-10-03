

const RecentActivity = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
                <li className="bg-gray-50 p-3 rounded-md">
                    <div className="font-semibold">Loan Disbursement</div>
                    <div className="text-sm text-gray-600">$3,000 disbursed for Fall 2024</div>
                    <div className="text-xs text-gray-500">September 1, 2024</div>
                </li>
                <li className="bg-gray-50 p-3 rounded-md">
                    <div className="font-semibold">Document Uploaded</div>
                    <div className="text-sm text-gray-600">Enrollment Verification Form</div>
                    <div className="text-xs text-gray-500">August 25, 2024</div>
                </li>
                <li className="bg-gray-50 p-3 rounded-md">
                    <div className="font-semibold">Payment Received</div>
                    <div className="text-sm text-gray-600">$250 monthly payment</div>
                    <div className="text-xs text-gray-500">August 15, 2024</div>
                </li>
            </ul>
        </div>
    )
}

export default RecentActivity