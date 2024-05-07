import Table from "./components/Table";
import Navbar from "./components/navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
