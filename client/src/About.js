import React from "react";
let img = (i) => {
  return (
    <img
      alt={i}
      title={i}
      src={
        "/img/" +
        i +
        (["azure-appservice", "mongodb"].includes(i) ? ".png" : ".svg")
      }
    />
  );
};

export default function About() {
  return (
    <div className="content">
      <h1>About</h1>
      <div className="about">
        <div className="about-text">
          <h1>Me</h1>
          <ul>
            <li>Student</li>
            <li>Developer</li>
            <li>Jyväskylä, Finland</li>
          </ul>
        </div>
        <div className="about-icons">
          <h2>What I've done</h2>
          <div className="about-img">
            {img("python")}
            {img("docker")}
            {img("html")}
            {img("javascript")}
            {img("reactjs")}
            {img("nodejs")}
            {img("linux")}
            {img("android")}
            {img("azure-appservice")}
            {img("google-appengine")}
            {img("git")}
            {img("mongodb")}
          </div>
        </div>
      </div>
    </div>
  );
}
