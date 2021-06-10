import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



export  default function Connect(){
    return(
        <div className="connect-container">
             <div>
                 &#169;2021 Designed and Build by Sandeep Butte
             </div>
            {/* <div className="social-medias">
                <a  href="https://www.linkedin.com/in/sandeep-butte-87b824146/" target="_blank" rel="noreferrer" className="socialicon">
                    <span><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></span>
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/sandeep3690Butte" target="_blank" rel="noreferrer" className="socialicon">
                    <span><FontAwesomeIcon className="github" icon={faGithub} /></span>
                    <span>Github</span>
                </a>
            </div> */}
            <div className="connect-media">
                <a  href="https://www.linkedin.com/in/sandeep-butte-87b824146/" target="_blank" rel="noreferrer" className="iconcoonect">
                    <span><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></span>
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/sandeep3690Butte" target="_blank" rel="noreferrer" className="iconcoonect">
                    <span><FontAwesomeIcon className="github" icon={faGithub} /></span>
                    <span>Github</span>
                </a>
            </div>
        </div>
    )
}
