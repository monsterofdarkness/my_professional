import React from "react";
import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Project from "./pages/Project"
import More from "./pages/More";
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/Contact" element={<Contact></Contact>}></Route>
      <Route path="/Project" element={<Project></Project>}></Route>
      <Route path="/More" element={<More></More>}></Route>
    </Routes>
    </>
  );
}

export default App;
