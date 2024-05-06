const Navbar = () => {
  return (
    <header className="navbar">
      <h1>
        User <span>Details</span>
      </h1>
      <nav className="nav">
        <div>
          <input type="text" placeholder="Search..."/>
          <img src="src/assets/search.png" alt="" />
        </div>
        <button>Add User</button>
      </nav>
    </header>
  );
};

export default Navbar;
