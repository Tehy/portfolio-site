import React from "react";

export default function About() {
  return (
    <div className="content">
      <h2>About me</h2>
      <div className="about-text">
        <ul>
          <li>Student</li>
          <li>Developer</li>
          <li>Jyväskylä, Finland</li>
        </ul>
      </div>
      <div className="about-img">
        <img src="/img/python.svg"></img>
        <img src="/img/docker.svg"></img>

        <img src="/img/html.svg"></img>
        <img src="/img/javascript.svg"></img>
        <img src="/img/reactjs.svg"></img>
        <img src="/img/nodejs.svg"></img>

        <img src="/img/linux.svg"></img>
        <img src="/img/google-appengine.svg"></img>
        <img src="/img/git.svg"></img>
      </div>
    </div>
  );
}
