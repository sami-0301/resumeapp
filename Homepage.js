import React from "react";
import './Homepage.css';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
function Homepage() {
     return (
        <div className="Homepage_container">
            <div class='Homepage_left'>
            <p className="Homepage_left_h1">
            <span className="hot_pink"> Hi,</span> <span className="nhp">my name is</span> 
            </p>
            <p className="Homepage_left_h2">Samiksha Dogra</p>
            <p className="Homepage_left_h3">Developer at  
            <span className="hot_pink"> Somewhere</span>{" "}</p>
            <p className="Homepage_left_desription">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
            </p>
            <div>
                <a href="https://github.com/sami-0301" target='_blank'>
                <img src={linkedin} alt="gitHubimage" className="logo" />
                </a>
                <a href="https://www.linkedin.com/in/samiksha-d-a774631b7/" target='_blank'>
                    <img src={github} alt="linkedinimage" className="logo"/>
                </a>
                <div>
                <a href="mailto:samikshadogra12@gmail.com">
                    <button className="Homepage_left_button">Get in Touch</button>
                </a>
                </div>
            </div>
            </div>
            <div className="Homepage_right">
            <img src ="https://cdn.dribbble.com/users/5950507/screenshots/15172610/media/3a55b2636de40cb3114a58cf7cc8d62d.gif"
            alt="gif" 
            />
            </div>
        </div>
     )
}
export default Homepage;