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
    axios.post("/api/repos", {}).then((res) => {
      const repos = res.data;
      setProjects(repos);
      setLoading(false);
    });
  };
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  /* var languages = projects.map(repo => {
    return repo.language;
  }); */

  // filter projects by languages
  var languages = new Set(
    projects.map((repo) => {
      return repo.language;
    })
  );
  languages = Array.from(languages);

  var projByLang = languages.map((l) => {
    return {
      data: { lang: l, projects: projects.filter((p) => p.language === l) },
    };
  });

  /* for (let i of projByLang) {
    console.log(i.data.projects[0].content.data.live);
  } */

  if (loading)
    return (
      <div className="content">
        <h2>Loading...</h2>
      </div>
    );
  return (
    <div className="content">
      <h2>Projects</h2>
      {projByLang.map((l) => (
        <div className="projects-by-lang">
          <Language key={l.data.lang} language={l.data.lang} />

          <div className="content-projects">
            {l.data.projects.map((pr) => (
              <div>
                <Project
                  key={pr.name}
                  name={pr.name.replace(/-|_/gi, " ")}
                  description={pr.description}
                  link={pr.html_url}
                />
                {pr.content.data.live.status === true ? (
                  <Link
                    to={{
                      pathname: "/live",
                      data: pr.content.data.live.files,
                    }}
                  >
                    <button type="button">Live!</button>
                  </Link>
                ) : (
                  <button style={{ display: "none" }} type="button">
                    Im live
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
