import React from "react";
import "./landingPage.css";
import { withRouter } from "react-router-dom";
import cory from '../../images/cory.jpg'

const text = "Full Stack Web Developer with a passion for writing code and solving problems. Bringing dreams to reality is my motivation. I bring several years of real-world experience along with a unique point of view. How can I help you bring your ideas to life?"


function LandingPage(props) {

  const handleClick = event => {
    let url = event.target.name
    props.history.push(`/${url}`)
  };

  return (
    <div className="background">
      <div className='middle-container'>
        <img className='profilePic' src={cory} />
        <div className='name-container'>
          <div className="name"><h1>CORY ADAMS</h1><h2>WEB DEVELOPER</h2> </div>
          <div className='text'>{text}</div>
        </div>
      </div>
      <div className="buttons">
        <button name="resume" onClick={handleClick}>RESUME</button>
        <button name="projects" onClick={handleClick}>PROJECTS</button>
        <button onClick={() => window.location = 'https://medium.com/@coadams9'}>BLOGS</button>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);

