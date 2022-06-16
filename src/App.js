import React from "react";
import './App.css';

import Headers from "./components/Header";
import About from "./components//About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experince from "./components/Experince";
import Project from "./components/Project";
import Connect from "./components/SocialMedia";

function App() {
React.useEffect(() => {
  const containers = document.querySelectorAll(".context-container");
  if(containers ){
    const observer = new IntersectionObserver((entries, observer) => {
      entries.map((entry) => {
        if(!entry.isIntersecting){
          return;
        }
        console.log(entry);
        entry.target.classList.add("animated-scrool");
        observer.unobserve(entry.target);
      })
    },{
      threshold: 1,
    });
    containers.forEach(elem => observer.observe(elem));
  }else{
    console.log("no containers found");
  }
})
  return (
    <div className="App">
      <Headers />
      <div className="main-content">
        <div id="about" className="fadeOpactity context-container">
            <About/>
          </div>
          <div id="experince" className="fadeOpactity context-container">
            <Experince/>
          </div>
          <div id="project" className="fadeOpactity texts context-container">
            <Project/>
          </div>
          <div id="skills" className="texts context-container">
            <Skills/>
          </div>
          <div id="education" className="fadeOpactity texts context-container">
            <Education/>
          </div>
          <div id="connectme" className="texts context-container">
            <Connect/>
          </div>
      </div>
    </div>
  );
}
//TEST

export default App;
