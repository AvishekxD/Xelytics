import React from "react";

interface StatCardProps {
  icon: string;
  label: string;
  value: number;
}

const StatCard = ({ icon, label, value }: StatCardProps) => {
  return (
    <div className="bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition shadow-neutral-800 ring-1 ring-neutral-700/30">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-neutral-100">{label}</h3>
      <p className="text-2xl font-bold text-neutral-100 mt-1">{value}</p>
    </div>
  );
};

export default StatCard;
