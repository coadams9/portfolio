import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Resume from "./components/resume/Resume";
import Blogs from "./components/blogs/Blogs";
import Projects from "./components/projects/Projects";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
