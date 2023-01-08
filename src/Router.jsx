import React from "react";
import { Route, Routes } from "react-router-dom";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";
import About from "./pages/About";
import Home from "./pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accomodation/:id" element={<Accommodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
