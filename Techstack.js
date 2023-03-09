import React from "react";
import './Techstack.css'
import c from '../../images/c.png'
import js from '../../images/js.png'
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

function Techstack(){
    const techstackData= [
        {
            iconName:'C',
            iconImage:c,
        iconAltProperty:"reactImage",
        },
        {
            iconName:"javascript",
            iconImage:js,
            iconAltProperty:"jsImage",
        },
    ];

    return(
        <div className="techstack_container">
        <p className="techstack_title">Tech Stack</p>
        <div className="techstack_icon_container">
        {techstackData.map((item,index) => {
            return(
                <TechStackIconContainer
                image={item.iconImage}
                altProperty={item.iconAltProperty}
                name={item.iconName}
                />
            );
        })}
        </div>
        <div className="techstack_icon_container">
        {techstackData.map((item,index) => {
            return(
                <TechStackIconContainer
                image={item.iconImage}
                altProperty={item.iconAltProperty}
                name={item.iconName}
                />
            );
        })}
        </div>
        </div>
    );
}
export default Techstack;