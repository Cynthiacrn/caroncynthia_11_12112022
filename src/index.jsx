import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accomodation/:id" element={<Accommodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
