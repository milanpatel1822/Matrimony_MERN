import React from 'react';
import { FaEdit } from "react-icons/fa";

const ProfileDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img
        className="w-32 h-32 rounded-full mb-4"
        src="https://cdn.pixabay.com/photo/2023/08/15/09/21/camera-8191564_640.jpg"
        alt="Profile"
      />
      <h2 className="text-2xl font-bold mb-2">Tank Harsh</h2>
      <p className="text-gray-600 mb-2">Age: 12</p>
      <p className="text-gray-600 mb-2">Location: Rajkot, India</p>
      <button className="bg-purple-500 text-white flex justify-center items-center py-2 px-4 rounded-lg mt-4 hover:bg-purple-700">
      <span className='px-2'><FaEdit /></span>  Edit Profile 
      </button>
    </div>
  );
};

export default ProfileDetails;
