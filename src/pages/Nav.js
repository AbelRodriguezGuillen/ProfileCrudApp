import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <h3>Profile & Search Creater</h3>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          {/* <Link to="/employer/dashboard">Dashboard</Link> */}
          <Link to="/employer/create">Create New Profile</Link>
          <Link to="/employee/feed">All Profiles</Link>
          <Link to="/">Logout</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
