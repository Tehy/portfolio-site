import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function NavBar() {
  const iconsize = 25;
  return (
    <div>
      <nav className="nav-bar">
        {/* <img src="/img/avatar.svg"></img> */}
        <img src="/img/avatar2.svg"></img>

        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <li>Projects</li>
          </Link>
          <Link to="/cv" style={{ textDecoration: "none" }}>
            <li>CV</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="icons">
          <a href="https://github.com/Tehy" target="_blank">
            <FaLinkedin size={iconsize} />
          </a>
          <a href="https://github.com/Tehy" target="_blank">
            <FaGithubSquare size={iconsize} />
          </a>
        </div>
      </nav>
      <hr />
    </div>
  );
}
