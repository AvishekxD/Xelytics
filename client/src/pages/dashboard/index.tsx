"use client";

import { useUser } from "@clerk/clerk-react";
import StatCard from "../../components/dashboardcomponents/StatCard";


const DashboardHome = () => {
  const { user } = useUser();

  // You can later replace these with real stats from your backend
  const stats = [
    {
      label: "Files Uploaded",
      value: 14,
      icon: "📄",
    },
    {
      label: "Charts Generated",
      value: 27,
      icon: "📊",
    },
    {
      label: "Exports",
      value: 9,
      icon: "📥",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center md:text-start">
        <h2 className="text-3xl font-bold text-neutral-100">
          Welcome, {user?.firstName || "Explorer"}.
        </h2>
        <p className="text-neutral-400 mt-1">
          Here's a quick glance at your analytics activity.
        </p>
      </div>
      <div className="bg-neutral-800 mx-auto p-10 rounded-lg text-white shadow-md shadow-neutral-900">
          <div className="flex flex-col md:flex-row justify-between px-8 items-center">
            <div className="flex flex-col md:flex-row items-center gap-4.5 text-center md:text-start">
                <img src="https://avatars.githubusercontent.com/u/114127999?v=4" 
                  alt="ProfilePicture" 
                  className="rounded-full w-36 h-36"
                />
                <div>
                  <p>AvishekxD</p>
                  <p>Fazes1mple@gmail.com</p>
                  <p>Member Since</p>
                </div>
            </div>
            <div className="text-center md:text-start py-2 px-8 mt-5 md:mt-0 md:px-12 md:py-3 bg-neutral-700/40  rounded-lg ">
                <p>current plan</p>
                <p>Free</p>
            </div>
          </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-neutral-100">
        {stats.map((stat, i) => (
          <StatCard key={i} icon={stat.icon} label={stat.label} value={stat.value}/>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
