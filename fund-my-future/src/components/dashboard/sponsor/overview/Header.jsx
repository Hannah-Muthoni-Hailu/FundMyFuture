/* eslint-disable react/prop-types */

const Header = ({ profile }) => {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center">
          <span className="mr-4 text-gray-500">Welcome, {profile.username}</span>
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </header>
    );
  };
  
  export default Header;
  