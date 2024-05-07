import useFetch from "./components/useFetch";
import Modal from "./components/Modal";
import Table from "./components/Table";
import Navbar from "./components/navbar";
import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
    console.log(modal);
  };

  return (
    <div className="app">
      <Navbar toggle={toggleModal} />
      {modal && (
        <div className="overlay">
          <Modal toggle={toggleModal} />
        </div>
      )}
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Table />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
