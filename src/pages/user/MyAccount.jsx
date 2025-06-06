import { useEffect, useState } from 'react';

import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaKey, FaCamera } from "react-icons/fa";

import { useFetchUserDetails } from '../../hooks/index';

const MyAccount = () => {
    useEffect(() => {
        document.title = "My Account | Ocean View";
    }, []);

    const { userDetails, setUserDetails, loading, error, fetchUserDetails } = useFetchUserDetails();

    const [profilePhoto, setProfilePhoto] = useState(userDetails['profile_photo']);
    const [password, setPassword] = useState("");

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // ilisan ranig change og usePhoto sa 
            setProfilePhoto(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prev => ({ ...prev, [name]: value }));
    }


    return (
        <div className="max-w-lg mx-auto p-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Profile Photo */}
                <div className="flex justify-center mb-8">
                    <div className="relative group w-40 h-40">
                        <img
                            src={profilePhoto || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ37pgm9wBYYq3DLzl5v8F7LgL39GZE5pyw&s"}
                            alt="Profile"
                            className="rounded-full object-cover w-full h-full border shadow"
                        />
                        <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer rounded-full">
                            <FaCamera className="text-white text-2xl" />
                            <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                        </label>
                    </div>
                </div>
 
                <form className="grid gap-6 text-gray-800">
                    {/* User Info */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="font-medium flex items-center gap-2">
                                <FaUser /> Username
                            </label>
                            <input type="text" name='username' onChange={handleInputChange} value={userDetails['username'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="Username" />
                        </div>
                        <div className="space-y-2">
                            <label className="font-medium flex items-center gap-2">
                                <FaEnvelope /> Email
                            </label>
                            <input type="email" name='email' onChange={handleInputChange} value={userDetails['email'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="Email" />
                        </div>
                        <div className="space-y-2">
                            <label className="font-medium flex items-center gap-2">
                                <FaKey /> Password
                            </label>
                            <input
                                type="password"
                                name='username' onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200"
                                placeholder="New Password"
                            />
                            <p className="text-sm text-gray-500 mt-1">Leave blank if you do not want to change the password.</p>
                        </div>
                    </div>

                    {/* Guest Details */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="font-medium flex items-center gap-2">
                                <FaUser /> Full Name
                            </label>
                            <div className="space-y-1">
                                <input type="text" name='first_name' onChange={handleInputChange} value={userDetails['first_name'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200 " placeholder="First Name" />
                                <input type="text" name='middle_name' onChange={handleInputChange} value={userDetails['middle_name'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="Middle Name" />
                                <input type="text" name='sur_name' onChange={handleInputChange} value={userDetails['sur_name'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="Surname" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="font-medium flex items-center gap-2">
                                <FaMapMarkerAlt /> Address
                            </label>
                            <div className="space-y-1">
                                <input type="text" name='region' onChange={handleInputChange} value={userDetails['region'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="Region" />
                                <input type="text" name='province' onChange={handleInputChange} value={userDetails['province'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="Province" />
                                <input type="text" name='city' onChange={handleInputChange} value={userDetails['city'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="City" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="font-medium flex items-center gap-2">
                                <FaPhone /> Phone Number
                            </label>
                            <input type="tel" name='phone_number' onChange={handleInputChange} value={userDetails['phone_number'] || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition duration-200" placeholder="Phone Number" />
                        </div>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;

