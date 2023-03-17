import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <h5>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "inherit",
            }}
          >
            Creat Profiles & Search
          </Link>
        </h5>
        <ul className="nav-links">
          <Button
            sx={{
              margin: "1% 2%",
              backgroundColor: "transparent",
              color: "white",
              "&:hover": {
                backgroundColor: "#1e1e1e",
              },
            }}
            variant="text"
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </Link>
          </Button>
          <Button
            sx={{
              margin: "1% 2%",
              backgroundColor: "transparent",
              color: "white",
              "&:hover": {
                backgroundColor: "#1e1e1e",
              },
            }}
            variant="text"
          >
            <Link
              to="/api/post/create"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Create New Profile
            </Link>
          </Button>
          <Button
            sx={{
              margin: "1% 2%",
              backgroundColor: "transparent",
              color: "white",
              "&:hover": {
                backgroundColor: "#1e1e1e",
              },
            }}
            variant="text"
          >
            <Link
              to="/api/post/feed"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              All Profiles
            </Link>
          </Button>
          <Button
            sx={{ margin: "1% 2%", backgroundColor: "darkcyan" }}
            variant="contained"
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "inherit",
              }}
            >
              Logout
            </Link>
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
