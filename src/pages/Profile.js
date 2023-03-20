import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const [id, setId] = useState("");
  const [profile, setProfile] = useState(null);
  const [titleValue, setTitleValue] = useState();
  const [descValue, setDescValue] = useState();
  const [yoeValue, setYoeValue] = useState();
  const [techStackValue, setTechStackValue] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile && profile.title) {
      setTitleValue(profile.title);
    }
    if (profile && profile.desc) {
      setDescValue(profile.desc);
    }
    if (profile && profile.yoe) {
      setYoeValue(profile.yoe);
    }
    if (profile && profile.techStack) {
      const filteredTechStack = profile.techStack.filter((s) => s);
      setTechStackValue(filteredTechStack.join(", "));
    }
  }, [profile]);

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const idFromUrl = pathArray[pathArray.length - 1];
    setId(idFromUrl);
  }, []);

  useEffect(() => {
    const fetchProfileToUpdate = async () => {
      const response = await axios.get(`http://localhost:8080/api/posts/${id}`);
      console.log(id);
      console.log(response);
      setProfile(response.data);
    };
    if (id) {
      fetchProfileToUpdate();
    }
  }, [id]);
  console.log(profile);
  console.log(id);

  if (profile === null) {
    return <div>Loading...</div>;
  }

  if (Object.keys(profile).length === 0) {
    return <div>Profile not found</div>;
  }

  const handleSaveChanges = async (id) => {
    try {
      const updateProfle = {
        title: titleValue,
        desc: descValue,
        yoe: yoeValue,
        techStack: techStackValue.split(",").map((s) => s.trim()),
      };
      const response = await axios.put(
        `http://localhost:8080/api//posts/edit/${id}`,
        updateProfle
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate("/api/post/feed");
  };

  return (
    <Box>
      <Card>
        <Box p={2}>
          {/* HOME BTN */}
          <Typography variant="h4"></Typography>
          <Button sx={{ margin: "1% 2%" }} variant="contained">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Home
            </Link>
          </Button>
          {/* BACK BTN */}
          <Button sx={{ margin: "1% 2%" }} variant="contained">
            <Link
              to="/api/post/feed"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Go Back
            </Link>
          </Button>

          <Grid key={profile.id} item xs={12} md={6} lg={4}>
            <Card sx={{ padding: "3%", overflow: "hidden", width: "100%" }}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EditIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  display: "block",
                  margin: "0 auto",
                  padding: "2%",
                }}
                fullWidth
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EditIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  display: "block",
                  margin: "0 auto",
                  padding: "2%",
                }}
                fullWidth
                value={descValue}
                onChange={(e) => setDescValue(e.target.value)}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EditIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  display: "block",
                  margin: "0 auto",
                  padding: "2%",
                }}
                fullWidth
                value={yoeValue}
                onChange={(e) => setYoeValue(e.target.value)}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EditIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  display: "block",
                  margin: "0 auto",
                  padding: "2%",
                }}
                fullWidth
                value={techStackValue}
                onChange={(e) => setTechStackValue(e.target.value)}
              />
              <Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    sx={{ width: "20%", margin: "2% auto" }}
                    variant="contained"
                    type="submit"
                    value={profile.id}
                    onClick={(e) => handleSaveChanges(profile.id)}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Typography>
            </Card>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
