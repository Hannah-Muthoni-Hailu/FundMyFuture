
import { Lock, Eye } from 'lucide-react';

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="space-y-6">
        <div>
          <div>
            <h2>Notification Preferences</h2>
          </div>
          <div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <input type="checkbox" className="toggle toggle-purple" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span>SMS Notifications</span>
                <input type="checkbox" className="toggle toggle-purple" />
              </div>
              <div className="flex items-center justify-between">
                <span>Push Notifications</span>
                <input type="checkbox" className="toggle toggle-purple" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <h2>Security Settings</h2>
          </div>
          <div>
            <div className="space-y-4">
              <button className="flex items-center text-purple-600 hover:text-purple-700">
                <Lock className="w-5 h-5 mr-2" />
                Change Password
              </button>
              <button className="flex items-center text-purple-600 hover:text-purple-700">
                <Eye className="w-5 h-5 mr-2" />
                Enable Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <h2>Appearance</h2>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" className="toggle toggle-purple" />
            </div>
          </div>
        </div>
      </div>
      
      <button className="mt-6 btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
        Save Changes
      </button>
    </div>
  );
};

export default Content;