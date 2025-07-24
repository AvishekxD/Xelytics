import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-neutral-800 border-r-1 border-neutral-700 p-6 hidden md:block ">
      <Link to="/" className="text-2xl text-white font-bold mb-8 flex items-center gap-1">
        <img src="src/assets/favicons/android-chrome-512x512.png" alt=""  className="w-8 h-8 invert-85"/>
        Xelytics
      </Link>
      <nav className="space-y-6 mt-8 ">
        <div className="flex flex-row justify-start items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            className="h-5 w-5 shrink-0 text-neutral-100 ">
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
            
          </svg>
          <Link to="/dashboard" className="text-neutral-100 hover:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 ">Dashboard</Link>
        </div>
        <div className="flex flex-row justify-start items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            className="h-5 w-5 shrink-0 text-neutral-100 ">
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
            
          </svg>
          <Link to="/dashboard/my-files" className="text-neutral-100 hover:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 ">My Files</Link>
        </div>
        <div className="flex flex-row justify-start items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            className="h-5 w-5 shrink-0 text-neutral-100 ">
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
            
          </svg>
          <Link to="/dashboard/charts" className="text-neutral-100 hover:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 ">Generate Charts</Link>
        </div>
        <div className="flex flex-row justify-start items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" 
            viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" 
            className="h-5 w-5 shrink-0 text-neutral-100 ">
            <path d="M5 12l14 0"></path>
            <path d="M5 12l6 6"></path>
            <path d="M5 12l6 -6"></path>
          </svg>
          <Link to="/dashboard/settings" className="text-neutral-100 hover:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 ">Logout</Link>
        </div>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
