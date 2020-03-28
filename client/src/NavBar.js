import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function NavBar() {
  const devVer = process.env.SERVICE_BUILD + "_test_ver"; //TRY = process.env("SERVICE_BUILD")
  const iconsize = 25;
  return (
    <div>
      <nav className="nav-bar">
        <img className="avatar" src="/img/avatar2.svg" alt=""></img>
        <ul>
          <Link className="nav-link" to="/" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <Link
            className="nav-link"
            to="/projects"
            style={{ textDecoration: "none" }}
          >
            <li>Projects</li>
          </Link>
          <Link
            className="nav-link"
            to="/cv"
            style={{ textDecoration: "none" }}
          >
            <li>CV</li>
          </Link>
          <Link
            className="nav-link"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
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
          <p>{devVer}</p>
        </div>
      </nav>
      <hr />
    </div>
  );
}
