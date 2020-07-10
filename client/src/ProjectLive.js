import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectLive(props) {
  useEffect(() => {
    fetchLive();
  }, []);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState();

  const fetchLive = async () => {
    const data = props.location.data;
    axios
      .post("/api/live", {
        data,
      })
      .then((res) => {
        setFile(res.data);
        setLoading(false);
      });
  };

  return (
    <div>
      {loading === true ? (
        <div className="content">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="content">
          <h1>Live</h1>
          <iframe srcDoc={file}></iframe>
        </div>
      )}
    </div>
  );
}
