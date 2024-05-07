import Add from "./components/Add";
import EditPage from "./components/EditPage";
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
          <Route path="/add" element={<Add />} />
          <Route path="/editpage/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
