import React from "react";

export default function Content(props) {
  return (
    <div className="content">
      <p>content 1</p>
      <p>{props.content}</p>
      <p>content 2</p>
    </div>
  );
}
