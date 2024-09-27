import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
