import React from "react";
import "./landingPage.scss";
import { withRouter } from "react-router-dom";

function LandingPage(props) {

  const handleClick = event => {
    let url = event.target.name
    props.history.push(`/${url}`)
  };

  return (
    <div className="landingPage">
      <div className="background">
        <div className="name">
          <h1>CORY ADAMS</h1>
          <h2>WEB DEVELOPER</h2>
        </div>
        <div className="buttons">
          <button name="resume" onClick={handleClick}>RESUME</button>
          <button name="projects" onClick={handleClick}>PROJECTS</button>
          <button name="blogs" onClick={handleClick}>BLOGS</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
