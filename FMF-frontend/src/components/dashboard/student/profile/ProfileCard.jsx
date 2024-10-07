/* eslint-disable react/prop-types */


const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center">
        <img 
          src={profile.profilePicture} 
          alt={profile.username} 
          className="w-16 h-16 rounded-full border border-gray-300"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{profile.username}</h2>
          <p className="text-gray-500">{profile.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
