import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <a href="/add">
          <button>Add User</button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
