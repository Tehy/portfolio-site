import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project(props) {
  return (
    <div className="project">
      <div className="project-title">
        <h2>{props.name}</h2>
      </div>
      {props.description}
      <br />
      <div className="proj-buttons">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
