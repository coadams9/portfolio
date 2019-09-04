import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
