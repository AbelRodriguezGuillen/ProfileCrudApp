import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState([]);
  // const [allData, setAllData] = useState([]);
  const [reactId, setReactId] = useState();

  const navigate = useNavigate();
  const [form, setForm] = useState();

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setProfile(response.data);
    };
    const fetchInitialProfiles = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      console.log(response);
      setProfile(response.data);
    };
    if (query.length === 0) fetchInitialProfiles();
    if (query.length > 2) fetchProfiles();
  }, [query]);
  console.log(profile);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(`http://localhost:8080/post/${reactId}`);
      setReactId(response.data);
    };
    const deleteProfile = async () => {
      const response = await axios.delete(
        `http://localhost:8080/post/${reactId}`
      );
      console.log(response);
    };

    if (reactId !== null && reactId !== undefined) {
      deleteProfile();
      window.location.reload();
    } else {
      fetchProfile();
    }
  }, [reactId]);
  console.log(reactId);

  // const handleSubmit = (e) => {
  //   const fetchAlldata = async () => {
  //     const response = await axios.get(`http://localhost:8080/allPosts`);
  //     console.log(response);
  //     setAllData(response.data);
  //     console.log(allData);
  //     allData.map((p) => {
  //       // console.log(p.id);
  //       const deleteById = async () => {
  //         const response = await axios.get(
  //           `http://localhost:8080/posts` + p.id
  //         );
  //         console.log(response);
  //         setId(response.data);
  //         console.log(id);
  //       };
  //       // deleteById();
  //     });
  //     console.log(allData);
  //   };
  //   fetchAlldata();
  //   console.log(fetchAlldata());
  //   navigate("/employee/feed");
  // };

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
        <Button sx={{ margin: "1% 2%" }} variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {profile &&
        profile.map((p) => {
          return (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {p.title}
                </Typography>
                <Typography
                  sx={{ color: "#585858", marginTop: "2%" }}
                  variant="body"
                >
                  Description: {p.desc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  Years of Experience: {p.yoe} years
                </Typography>

                <Typography gutterBottom variant="body">
                  Skills :{" "}
                </Typography>
                {p.techStack.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .{` `}
                    </Typography>
                  );
                })}
                <Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      sx={{ width: "10%", margin: "2% auto" }}
                      variant="contained"
                      type="submit"
                      value={p.id}
                      onClick={(e) => setReactId(e.target.value)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Typography>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Feed;
