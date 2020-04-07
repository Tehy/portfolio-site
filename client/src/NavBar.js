import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function NavBar() {
  const iconsize = 25;
  const style = { textDecoration: "none" };
  return (
    <div>
      <nav className="nav-bar">
        <img className="avatar" src="/img/avatar2.svg" alt=""></img>
        <ul>
          <Link className="nav-link" to="/" style={style}>
            <li>About</li>
          </Link>
          <Link className="nav-link" to="/projects" style={style}>
            <li>Projects</li>
          </Link>
          <Link className="nav-link" to="/cv" style={style}>
            <li>CV</li>
          </Link>
          <Link className="nav-link" to="/contact" style={style}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/tero-hyttinen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={iconsize} />
          </a>
          <a
            href="https://github.com/Tehy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={iconsize} />
          </a>
          <a
            href="https://www.codewars.com/users/terhytti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/codewars.png" alt="codewars icon"></img>
          </a>
        </div>
      </nav>
      <hr />
    </div>
  );
}
