import React from "react";
import './TechStackIconContainer.css'


export default function TechStackIconContainer({name, image,altproperty}) {
return (
    <div className="techstack_icons">
    <img src={image} alt={altproperty}/>
    <p> {name} </p>
    </div>
);
}
