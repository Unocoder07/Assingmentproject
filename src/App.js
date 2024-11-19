import React, { useState,useEffect } from "react";
// import { useState } from "react";
import "./index.css";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

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
  }, [theme]);  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh()
  },[])
  return (
    <div >
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
    </div>
  );
}

export default App;
