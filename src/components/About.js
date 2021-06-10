import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
           <div className="about-container">
               <div>
               <div className="name-info">
                   <span>Hello, I'm</span>
                   <span> Sandeep Butte</span>
               </div>
               <div className="work-info">
                   <div className="moto-lines">I build things that solves/automate some of the real world problems.</div>
                   <div className="more-details">
                       I'm a Bengaluru-based software engineer who specializes in building the digital software systems using the latest trends in technology and applying the concepts of Discrete mathematics, Datastructres and Algorithms.
                       Currently, I'm an sr.software Engineer at <span className="companyName">Globallogic</span> focused on building some of the Google internal products. 
                   </div>
               </div>
               </div>
               <div className="profile-img">
                   <img src="profile.jpg" alt="profile-img" />
               </div>
           </div>
        )
    }
}

export default About
