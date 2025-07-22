import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Other routes (Dashboard, Upload, Login) go here */}
      </Routes>
    </Router>
  );
}

export default App;
