import { useState } from 'react';
import axiosInstance from '../../api/axios';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Apply for Funding</h2>

      {/* Success and error messages */}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">Amount Needed</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reason" className="block text-gray-700">Reason</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
};

export default ApplicationForm;
