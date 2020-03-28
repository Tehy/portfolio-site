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
      <div className="about-icons">
        <p>What I do</p>
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
  );
}
