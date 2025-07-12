import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/Homescreen";
import AboutMe from "./pages/Home/AboutMe";
import ContactMe from "./pages/Home/ContactMe";
import MyPortfolio from "./pages/Home/MyPortfolio";

function App() {
  return (
    <div className="App m-container">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/about" element={<AboutMe />}></Route> */}
            <Route path="/contact" element={<ContactMe />}></Route>
            <Route path="/portfolio" element ={<MyPortfolio />}></Route>
            <Route path="*" element={<Home/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
