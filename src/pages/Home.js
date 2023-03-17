import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      {/* <Typography sx={{ margin: "5%" }} variant="h3" align="center">
        Profile Search & Creator
      </Typography> */}
      <div>
        <ul className="ul">
          <li>
            <Button
              sx={{ margin: "2% 3%", marginTop: "200px", color: "white" }}
              variant="contained"
              className="home-btn"
            >
              <Link
                to="/api/post/create"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Create a Profile
              </Link>
            </Button>
          </li>
          <li>
            <Button
              sx={{ margin: "2% 3%", color: "white" }}
              variant="contained"
              className="home-btn"
            >
              <Link
                to="/api/post/feed"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                View Profiles
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
