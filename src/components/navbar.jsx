import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <header className="nnavbar">
      <a href="/">
        <h1>
          User<span>Page</span>
        </h1>
      </a>
      <nav className="nav">
        <div>
          <input type="text" placeholder="Search..." />
          <img src="src/assets/search.png" alt="" />
        </div>

        <button onClick={toggle}>Add User</button>
      </nav>
    </header>
  );
};

export default Navbar;
