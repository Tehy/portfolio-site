import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project(props) {
  return (
    <div className="project">
      <h4>{props.name}</h4>
      {props.description}
      <br />
      <a href={props.link} target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
