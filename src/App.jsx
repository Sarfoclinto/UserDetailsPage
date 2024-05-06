import Table from "./components/Table";
import Navbar from "./components/navbar";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
