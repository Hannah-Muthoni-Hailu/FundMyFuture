import { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic (API call)
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Apply for Funding</h2>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">Amount Needed</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
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
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
