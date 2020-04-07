import React from "react";

export default function About() {
  return (
    <div className="content">
      <h2>About</h2>
      <div className="about">
        <div className="about-text">
          <h2>Me</h2>
          <ul>
            <li>Student</li>
            <li>Developer</li>
            <li>Jyväskylä, Finland</li>
          </ul>
        </div>
        <div className="about-icons">
          <h2>What I've done</h2>
          <div className="about-img">
            <img alt="" src="/img/python.svg"></img>
            <img alt="" src="/img/docker.svg"></img>
            <img alt="" src="/img/html.svg"></img>
            <img alt="" src="/img/javascript.svg"></img>
            <img alt="" src="/img/reactjs.svg"></img>
            <img alt="" src="/img/nodejs.svg"></img>
            <img alt="" src="/img/linux.svg"></img>
            <img alt="" src="/img/android.svg"></img>
            <img alt="" src="/img/google-appengine.svg"></img>
            <img alt="" src="/img/git.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
