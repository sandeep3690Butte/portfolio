import React from 'react'

export default function Experince(){
    const companies = [
        {name: "GlobalLogic", logo: "globallogic.jpeg", id:1},
        {name:"Intuit(Techchefs payroll)", logo: "intuit.jpeg", id:2},
        {name: "Klou9 Technologies", logo: "kloud9.png", id:3},
        {name: "DoppioGroup", logo: "doppio.png", id:4}
    ];
    const workDetails = [
        {id:1 ,designation: "Sr.software Engineer", 
        name:"GlobalLogic", 
        duration:"Jan 2020 - Present",
        points:[
            "Written the sharable UI componet for the google admin console product.", 
            "Providing supoort for all the frontend bugs.",
            "Writing the unit test for all the component.",
            "Working with the backend developers and integrating the backend API with the UI."]
        },
        {id:2 ,designation: "Sr.software Engineer", 
        name:"Intuit India(on Payroll TechChefs)", 
        duration:"Jan 2019 - Jan 2019",
        points:[
            "Worked for intuit's quickbook self employment product.", 
            "Helped optimiztion the frontend.",
            "Desgined and developed the responsive user intrfaces."]
        },
        {id:3 ,designation: "Interactive Designer", 
        name:"Kloud9", 
        duration:"Nov 2017 - Dec 2019",
        points:[
            "Building and managing the Kohl's e-commerce platfor.", 
            "Implemented the Kohl's loyalty programme.",
            "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences."]
        },
        {id:4 ,designation: "M3 Consultant", 
        name:"Doppiogroup", 
        duration:"July 2016 - Nov 2017",
        points:[
            "Worked on solving the EDI integration for the Infor M3 Customers.", 
            "Worked on customizing the M3 ERP as per the customer requirement using the integrated JS plugin.",
            "Integrating the Payment Gateways with the M3 ERP systems and automating the EDI documents flow for the manufacturing industries."]
        }
    ]
    const [activeCompany, setActiveCompany] = React.useState(1);

    const handleCompanyClick = (id) => {
        setActiveCompany(id);
    }
    const getRoleBrief = () => {
        const brief = workDetails.filter(value => value.id === activeCompany)[0];
        return(
            <div className="role-brief">
                <div className="designation-duration">
                    <div className="designation-details">
                        <span className="company-dest">{brief.designation}</span>
                        <span className="compay-names">@ {brief.name}</span>
                    </div>
                    <div className="active-years">
                        {brief.duration}
                    </div>
                </div>
                <div className="company-points">
                    {brief.points.map((value, index) => <div className="company-point" key={index}>
                        <span className="bullet"></span>
                        <span>{value}</span>
                    </div>)}
                </div>
            </div>
        )
    }
    return (
        <div className="experince-container">
            <h2 className="exp-header">Where I'have Worked</h2>
            <div className="company-experince">
            <div className="company-list">
                {companies.map(value => (
                    <div key={value.id} className={`company-details ${value.id === activeCompany ? `active-class`: ""}`} onClick={() => handleCompanyClick(value.id)}>
                        <span className="company-logo">
                            <img src={value.logo} alt="logo" />
                        </span>
                        <span className="company-name"> 
                            {value.name}
                        </span>
                    </div>
                ))}
            </div>
            {getRoleBrief()}
            </div>
        </div>
    )
}
