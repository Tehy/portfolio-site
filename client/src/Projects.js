import React, { useState, useEffect } from "react";
import Project from "./Project";
import Language from "./Language";

export default function Projects() {
  useEffect(() => {
    //fetchProjects();
  }, []);

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const data = await fetch("https://api.github.com/users/Tehy/repos");
    const repos = await data.json();

    //var data = await fetch("https://api.github.com/users/Tehy/repos");
    //const portfolioRepos=repos.map(r=> if(fetch(repos.html_url))

    setProjects(repos);
    setLoading(false);
  };
  var languages = projects.map(repo => {
    return repo.language;
  });
  languages = new Set(languages);
  languages = Array.from(languages);

  var projByLang = languages.map(l => {
    return {
      data: { lang: l, projects: projects.filter(p => p.language === l) }
    };
  });
  if (projects) {
    console.log(projects);
  }

  if (loading)
    return (
      <div className="content">
        <h2>wip</h2>
        {/* <h2>Loading...</h2> */}
      </div>
    );
  return (
    <div className="content">
      <h2>Projects</h2>
      {projByLang.map(p => (
        <div>
          <Language key={p.data.lang} language={p.data.lang} />

          <div className="content-projects">
            {p.data.projects.map(pr => (
              <Project
                key={pr.name}
                name={pr.name}
                description={pr.description}
                link={pr.html_url}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
