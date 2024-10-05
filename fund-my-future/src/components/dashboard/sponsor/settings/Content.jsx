

const Content = () => {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="mb-6">
          <div>
            <h2 className="text-lg font-semibold underline">Notification Preferences</h2>
          </div>
          <div>
            <form>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" id="email-notifications" name="email-notifications" className="rounded text-purple-600 focus:ring-purple-500" />
                  <label htmlFor="email-notifications" className="ml-2">Receive email notifications</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="sms-notifications" name="sms-notifications" className="rounded text-purple-600 focus:ring-purple-500" />
                  <label htmlFor="sms-notifications" className="ml-2">Receive SMS notifications</label>
                </div>
                <button type="submit" className="btn text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                  Save Preferences
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-lg font-semibold underline">Account Settings</h2>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <button className="text-purple-600 hover:text-purple-800 transition">
                  Manage Payment Methods
                </button>
              </li>
              <li>
                <button className="text-purple-600 hover:text-purple-800 transition">
                  Update Communication Preferences
                </button>
              </li>
              <li>
                <button className="text-red-600 hover:text-red-800 transition">
                  Deactivate Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;