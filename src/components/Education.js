import React from "react";

export default function Education() {
  const schoolDetails = [
    {
      id: 1,
      name: "M S Ramaiah Institute Of Technology",
      degree: "M.Tech(Master of Technology)",
      duration: "June 2014 - July 2016",
      branch: "Computer Science & Engineering",
      logo: "msritlogo.jpeg",
    },
    {
      id: 2,
      name: "PDA College of Engineering - H.K.E Society",
      degree: "B.E(Bachelor of Engineering)",
      branch: "Information Science & Engineering",
      duration: "June 2008 - Mar 2013",
      logo: "pdaceg.jpeg",
    },
  ];
  return (
    <div className="education-container">
      <h2 className="exp-header">EDUCATION</h2>
      <div className="campus-details">
        {schoolDetails.map((data) => (
          <div className="campus" key={data.id}>
            <div className="campus-name">
              <img
                className="campus-logo"
                src={`${process.env.PUBLIC_URL}/${data.logo}`}
                alt={data.logo}
              />
              <span className="campusname">{data.name}</span>
            </div>
            <div className="degree">{data.degree}</div>
            <div className="degree">{data.branch}</div>
            <div className="degree-duration">{data.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
