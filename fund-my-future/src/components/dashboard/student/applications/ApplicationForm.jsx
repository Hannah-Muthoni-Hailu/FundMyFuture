import { useState } from 'react';
import axiosInstance from '../../../../api/axios';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    reason: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      // Send the application data to the backend
      const response = await axiosInstance.post('/student/applications', formData);

      // Handle success
      setSuccessMessage('Application submitted successfully!');
      console.log('Response:', response.data);

      // Reset form data
      setFormData({
        amount: '',
        reason: ''
      });

    } catch (error) {
      // Handle error
      setError(error.response?.data?.message || 'Failed to submit application.');
      console.error('Error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  {/* Success and error messages */ }
  { successMessage && <p className="text-green-500 mb-4">{successMessage}</p> }
  { error && <p className="text-red-500 mb-4">{error}</p> }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">

      <h2 className="text-xl font-semibold mb-4">Apply for Education Financing</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input type="text" id="firstName" name="firstName" required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input type="text" id="lastName" name="lastName" required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="email" name="email" required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" id="phone" name="phone" required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
          <input type="text" id="school" name="school" required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Program of Study</label>
          <input type="text" id="program" name="program" required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Requested Loan Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            min="0"
            step="100"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Expected Start Date</label>
          <input type="date" id="startDate" name="startDate" required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Additional Information / Reason</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full text-white py-2 px-4 rounded-md hover:bg-purple-700 transition font-semibold btn"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
