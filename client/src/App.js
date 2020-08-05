import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import CV from "./CV";
import MessageSent from "./MessageSent";
import ProjectLive from "./ProjectLive";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import "./styles.css";

const NoMatchPage = () => {
  return (
    <div className="content">
      {" "}
      <h1>
        404
        <br />
        invalid url not found
      </h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/cv" component={CV} />
          <Route path="/contact" component={Contact} />
          <Route path="/sent" component={MessageSent} />
          <Route path="/live" component={ProjectLive} />
          <Route path="*" component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
