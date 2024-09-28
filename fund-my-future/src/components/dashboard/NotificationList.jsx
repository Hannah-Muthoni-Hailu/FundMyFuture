/* eslint-disable react/prop-types */


const NotificationList = ({ notifications }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2">
            <div className="p-2 bg-gray-100 rounded-md">
              {notification.message}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
