import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
