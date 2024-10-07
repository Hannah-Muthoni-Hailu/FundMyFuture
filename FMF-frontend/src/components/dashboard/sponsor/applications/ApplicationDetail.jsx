/* eslint-disable react/prop-types */


const ApplicationDetail = ({ application }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Application Details</h2>
      <p className="text-gray-700"><strong>Student Name:</strong> {application.studentName}</p>
      <p className="text-gray-700"><strong>Requested Amount:</strong> ${application.amount}</p>
      <p className="text-gray-700"><strong>Reason:</strong> {application.reason}</p>
      <p className="text-gray-700"><strong>Date Submitted:</strong> {application.dateSubmitted}</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Contribute</button>
    </div>
  );
};

export default ApplicationDetail;
