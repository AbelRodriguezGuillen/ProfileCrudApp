import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages";
import React, { useState } from "react";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/post">
          {/* <Route path="/employer/dashboard" element={<Dashboard />} /> */}
          <Route path="/api/post/create" element={<Create />} />
        </Route>
        <Route path="/api/post/feed" element={<Feed />} />
        <Route path="/api/posts/edit/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/post/:postId" element={<Profile postId={postId} />} /> */
}
