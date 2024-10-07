
import { Upload, Download, Eye } from 'lucide-react';

const documents = [
    {
        name: 'Loan Agreement',
        date: '2024-08-15',
        status: 'Signed'
    },
    {
        name: 'Academic Transcript',
        date: '2024-09-01',
        status: 'Uploaded'
    },
    {
        name: 'Financial Aid Award Letter',
        date: '2024-08-20',
        status: 'Pending Review'
    },
    {
        name: 'Proof of Enrollment',
        date: '2024-09-05',
        status: 'Required'
    },
];
const Content = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Documents</h1>

            <div className="mb-6">
                <div>
                    <h2 className='text-lg font-semibold mb-3 underline'>Upload New Document</h2>
                </div>
                <div>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-purple-50 hover:bg-purple-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-10 h-10 mb-3 text-purple-400" />
                                <p className="mb-2 text-sm text-purple-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-purple-500">PDF, PNG, JPG or GIF (MAX. 10MB)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h2 className='text-lg font-semibold underline mb-3'>Your Documents</h2>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Document Name</th>
                                    <th scope="col" className="px-6 py-3">Date</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {documents.map((doc, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{doc.name}</td>
                                        <td className="px-6 py-4">{doc.date}</td>
                                        <td className="px-6 py-4">{doc.status}</td>
                                        <td className="px-6 py-4">
                                            <button className="text-purple-600 hover:text-purple-900 mr-2">
                                                <Download className="w-5 h-5" />
                                            </button>
                                            <button className="text-purple-600 hover:text-purple-900">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;