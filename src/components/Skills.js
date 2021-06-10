import React from 'react'

export default function Skills(){
    const skills = [
        {
            name: "FrontEnd Techologies",
            techs: [
                {name: "HTML5", pic: 'htmllogo.png'},
                {name: "CSS3", pic: 'csslogo.png'},
                {name: "SCSS", pic: 'sass.png'},
                {name: "Javascript", pic: 'jslogo.png'},
                {name: "Jquery", pic: 'jquerylogo.png'},
                {name: "Reactjs", pic: 'reactlogo.png'},
                {name: "Redux", pic: 'reduxlogo.png'}
            ]
        },
        {
            name: "Backend",
            techs: [
                {name: "Nodejs", pic: 'nodejslogo.png'},
                {name:"MySql", pic: 'mysql.jpeg'}
            ]
        },
        {
            name: 'TestFrameworks & BuildTools & Devops',
            techs: [
                {name: 'Jasmine', pic: 'jasmine.png'},
                {name: 'chai', pic: 'chai.jpeg'},
                {name: "Webpack", pic:'webpack.png'},
                {name: "Gulp", pic:'gulp.png'},
                {name: "jenkins", pic: 'jenkins.png'},
                {name: "AWS", pic: 'awslogo.jpeg'}
            ]
        }
    ]
    return (
        <div className="skills-container">
            <h2 className="exp-header">SKILLS</h2>
            <div className="skills-categories">
                {skills.map(data => (
                    <div className="skills-types" key={data.name}>
                        <div className="skills-header">
                            {data.name}
                        </div>
                        <div className="skills-name">
                            {data.techs.map(value => (
                                <div className="name-logo" key={value.name}>
                                    <img className="skill-logo" src={value.pic} alt={value.pic} />
                                    <span className="skill-name">{value.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
