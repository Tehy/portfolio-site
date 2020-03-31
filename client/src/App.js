import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import About from "./About";
import CV from "./CV";
import MessageSent from "./MessageSent";
import Test from "./Test";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";

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
          {/* <Route path="/test" component={Test} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
