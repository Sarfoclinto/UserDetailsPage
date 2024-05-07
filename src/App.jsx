import AddUser from "./components/AddPage";
import Table from "./components/Table";
import Navbar from "./components/navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/add" element={<AddUser />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
