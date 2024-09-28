/* eslint-disable react/prop-types */


const ApplicationList = ({ applications }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Applications</h2>
      <ul>
        {applications.map((application, index) => (
          <li key={index} className="mb-4 p-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold">{application.studentName}</h3>
            <p className="text-gray-600">Requested Amount: ${application.amount}</p>
            <p className="text-gray-600">Reason: {application.reason}</p>
            <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded">
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;
