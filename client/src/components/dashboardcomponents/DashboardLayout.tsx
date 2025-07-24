"use client";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-800">
      <div className="flex h-screen mx-auto">
        <DashboardSidebar />
        <div className="flex flex-col flex-1">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 bg-neutral-900/90">
            <div className="mx-auto w-full max-w-7xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
