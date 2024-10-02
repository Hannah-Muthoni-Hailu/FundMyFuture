

import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";


const ApplicationList = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axiosInstance.get('/sponsor/applications');
                setApplications(response.data);  // Set the applications data in the state
            } catch (error) {
                console.error(error.response.data);  // Handle error
            }
        };

      fetchApplications();
  }, []);


    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Applications</h2>
            <ul>
                {
                    applications.map((app) => (
                        <li key={app.id} className="mb-4 p-4 border-b border-gray-300">
                            <h3 className="text-lg font-semibold">{app.student_name}</h3>
                            <p className="text-gray-600">Requested Amount: ${app.amount}</p>
                            <p className="text-gray-600">Reason: {app.reason}</p>
                            <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded">
                                View Details
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ApplicationList;
