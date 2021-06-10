import React from 'react'

export default function Project(){
    const projects = [
        {
            id: 1,
            project: "Google Admin Console",
            description: `Building and managing the new billing platform for all the Gsuite google products.
                            Basically the platform handles all the licensing issues and the product upgradation and downgration and all the billing related operation.`,
            stack: ["htmllogo.png",'sass.png', "jslogo.png"]
        },
        {
            id: 2,
            project: "Intuit Quickbooks selfEmployment",
            description: `Billing plugin is used for the subscription of all the different quickbooks products. Managing the online 
                          transaction and auto debt for the subscription are carried out by this plugin. Writing the amplitude tracking for business analysis.`,
            stack: ["htmllogo.png",'sass.png', "jslogo.png", "reactlogo.png", 'reduxlogo.png']
        },
        {
            id: 3,
            project: "Kohl's Loyalty Programme",
            description: `KOHLS is the Ecommerce website and they are the most engaging retailer in America. 
                            Ensured developing M.Com Wallet Application (AngularJs) with Responsive Web Design concept to deliver content and 
                            functionality across mobile devices ,tablet and screen sizes. Implemented the Loyalty Programme for kohls were the user get 
                            the cashback benefits for every order placed using the kohls cash card.`,
            stack: ["htmllogo.png",'sass.png', "jslogo.png", "reactlogo.png", 'reduxlogo.png']
        },
    ]
    return (
        <div className="project-container">
            <h2 className="exp-header">Projects I'have worked</h2>
            <div className="projects-description">
                {projects.map(value => (
                    <div className="project-details" key={value.id}>
                        <div className="project-header">{value.project}</div>
                        <div className="project-desc">{value.description}</div>
                        <div className="tech-stack">
                        {value.stack.map(data => (
                                <img className="tech-prog" src={data} alt={data} key={data}/>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
