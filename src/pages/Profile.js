// import {
//   Box,
//   Card,
//   Grid,
//   TextField,
//   Typography,
//   InputAdornment,
//   Button,
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import { Link } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // useEffect(() => {
//   //   const fetchProfile = async () => {
//   //     const response = await axios.get(`http://localhost:8080/post/${id}`);
//   //     setProfile(response.data);
//   //   };

//   //   fetchProfile();
//   // }, [id]);
//   console.log(id);

//   if (!profile) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Box>
//       <Card>
//         <Box p={2}>
//           <Typography variant="h4">{profile.title}</Typography>
//           <Typography variant="subtitle1">{profile.author}</Typography>
//           <Typography variant="body1">{profile.content}</Typography>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default Profile;
