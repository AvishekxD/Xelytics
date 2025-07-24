"use client";

import { useUser, SignOutButton } from "@clerk/clerk-react";
import { useState } from "react";

const Settings = () => {
  const { user } = useUser();
  const [name, setName] = useState(user?.fullName || "");
  const [bio, setBio] = useState("");

  const handleUpdate = () => {
    alert("Settings saved! (In real app, update backend)");
  };

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-black">Settings</h2>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Display Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
            rows={4}
            placeholder="Tell us something about you..."
          />
        </div>

        {/* Profile Image */}
        <div className="flex items-center gap-4">
          {user?.imageUrl && (
            <img
              src={user.imageUrl}
              alt="profile"
              className="w-14 h-14 rounded-full object-cover border"
            />
          )}
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => alert("Profile picture change (future feature)")}
          >
            Change Picture
          </button>
        </div>

        {/* Sign Out */}
        <div>
          <SignOutButton>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Sign Out
            </button>
          </SignOutButton>
        </div>

        {/* Save Button */}
        <button
          onClick={handleUpdate}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Settings
        </button>
      </div>
    </section>
  );
};

export default Settings;
