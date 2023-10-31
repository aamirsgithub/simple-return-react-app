import "./App.css";
import React from "react";
import NavbarComponent from "./components/navbar/NavbarComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Signin from "./pages/Signin/Signin";

const App = () => {
  return (
    <div>
      <>
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    </div>
  );
};

export default App;
