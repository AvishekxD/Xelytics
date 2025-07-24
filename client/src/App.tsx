import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contact from './components/about/Contact';
import DashboardLayout from './components/dashboardcomponents/DashboardLayout';
import DashboardHome from './pages/dashboard';
import MyFiles from './pages/dashboard/MyFiles';
import GenerateCharts from './pages/dashboard/GenerateCharts';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="my-files" element={<MyFiles />} />
          <Route path="charts" element={<GenerateCharts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* Other routes (Dashboard, Upload, Login) go here */}
      </Routes>
    </Router>
  );
}

export default App;
