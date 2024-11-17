import React, { useState,useEffect } from "react";
// import { useState } from "react";
import "./index.css";
import './App.css';
import Navbar from "./components/Navbar.jsx";


function App() {
  // Dark Mode Feature
   const [theme, setTheme] =
    React.useState(localStorage.getItem("theme") ?
      localStorage.getItem("theme") : "light");
  
  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  },[theme])
  return (
    <div >
      <Navbar theme={theme} setTheme={setTheme}>

      </Navbar>
    </div>
  );
}

export default App;
