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
              sx={{ margin: "2% 3%" }}
              variant="outlined"
              className="home-btn"
            >
              <Link to="/employer/create">Create a Profile</Link>
            </Button>
          </li>
          <li>
            <Button
              sx={{ margin: "2% 3%" }}
              variant="outlined"
              className="home-btn"
            >
              <Link to="/employee/feed">View Profiles</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// // import { Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import "../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Home = () => {
//   return (
//     <div>
//       <h1
//         sx={{ margin: "5%" }}
//         variant="h3"
//         align="center"
//         className="container bg-white p-4 mt-5"
//       >
//         Profile Search & Creator
//       </h1>
//       <div>
//         <ul className="ul">
//           <li>
//             <button type="button" class="btn btn-light">
//               <Link to="/employer/dashboard">Create a Profile</Link>
//             </button>
//           </li>
//           <li>
//             <button type="button" class="btn btn-light">
//               <Link to="/employee/feed">View Profiles</Link>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;
