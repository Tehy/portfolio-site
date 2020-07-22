import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectLive(props) {
  useEffect(() => {
    fetchLive();
    setTimeout(() => {
      loadingMessage === "Loading..." &&
        setLoadingMessage("Error loading live project");
    }, 6000);
  }, []);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState();

  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  const fetchLive = async () => {
    const data = props.location.data;
    data
      ? await axios
          .post("/api/live", {
            data,
          })
          .then((res) => {
            setFile(res.data);
            setLoading(false);
          })
      : setLoadingMessage("Error: Load live project from projects page");
  };

  if (loading)
    return (
      <div className="content">
        <h1>{loadingMessage}</h1>
      </div>
    );
  return (
    <div>
      (
      <div className="content">
        <h1>Live</h1>
        <iframe srcDoc={file}></iframe>
      </div>
      )
    </div>
  );
}
