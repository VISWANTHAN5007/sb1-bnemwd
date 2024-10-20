import React, { useState } from 'react';
import { User, Mail, Phone, Shield, Bell } from 'lucide-react';

const UserProfile: React.FC = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [emergencyContact, setEmergencyContact] = useState('+91 9876543211');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Updating profile:', { name, email, phone, emergencyContact, notificationsEnabled });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <div className="flex items-center border rounded">
              <User className="ml-2 text-gray-400" size={20} />
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="flex items-center border rounded">
              <Mail className="ml-2 text-gray-400" size={20} />
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center border rounded">
              <Phone className="ml-2 text-gray-400" size={20} />
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emergencyContact">
              Emergency Contact
            </label>
            <div className="flex items-center border rounded">
              <Shield className="ml-2 text-gray-400" size={20} />
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="emergencyContact"
                type="tel"
                placeholder="Enter emergency contact number"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
              />
              <span className="ml-2">Enable notifications</span>
              <Bell className="ml-2 text-gray-400" size={20} />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Safety Score</h2>
        <div className="flex items-center mb-4">
          <div className="w-full bg-gray-200 rounded-full mr-2">
            <div className="w-3/4 bg-green-500 text-xs leading-none py-1 text-center text-white rounded-full">75%</div>
          </div>
          <span className="text-sm font-semibold text-gray-700">Good</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Your safety score is calculated based on your driving behavior, adherence to traffic rules, and participation in road safety initiatives.
        </p>
        <h3 className="font-semibold mb-2">Recent Activity</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600">
          <li>Reported a road hazard (+5 points)</li>
          <li>Completed defensive driving course (+20 points)</li>
          <li>No traffic violations in the last 3 months (+10 points)</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;