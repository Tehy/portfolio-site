import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import axios from "axios";
import Language from "./Language";

export default function Projects() {
  useEffect(() => {
    fetchRepos();
  }, []);
  const fetchRepos = () => {
    axios.get("/api/repos").then((res) => {
      const repos = res.data;
      setProjects(repos);
      setLoading(false);
    });
  };
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  // TODO unset timeout on componentWillUnmount
  useEffect(() => {
    setTimeout(() => {
      if (projects.length === 0) {
        setLoadingMessage("Error receiving data...");
      }
    }, 6000);
  }, []);

  if (loading)
    return (
      <div className="content">
        <h1>{loadingMessage}</h1>
      </div>
    );
  return (
    <div className="content">
      <h1>Projects</h1>
      {projects.map((p, i) => (
        <div key={i} className="projects-by-lang">
          <Language key={p.language} language={p.language} />
          <Project
            key={p.name}
            name={p.name.replace(/-|_/gi, " ")}
            description={p.description}
            link={p.html_url}
          />

          {(p.content.data.live.status === true &&
            p.content.data.live.files && (
              <Link
                to={{
                  pathname: "/live",
                  data: p.content.data.live.files,
                }}
              >
                <button type="button">Live!</button>
              </Link>
            )) ||
            (p.content.data.live.link && (
              <a
                href={p.content.data.live.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <button type="button">Live!</button>
              </a>
            ))}
        </div>
      ))}
    </div>
  );
}
