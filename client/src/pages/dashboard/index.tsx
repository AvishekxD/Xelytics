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
      <div>
        <h2 className="text-3xl font-bold text-neutral-100">
          Welcome, {user?.firstName || "Explorer"}.
        </h2>
        <p className="text-neutral-400 mt-1">
          Here's a quick glance at your analytics activity.
        </p>
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
