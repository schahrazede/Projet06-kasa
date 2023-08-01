import React from "react";
import "../styles/components/LogementTitle.scss";

function LogementTitle(props) {
  return (
    <div className="logement-title">
      <h1>{props.title}</h1>
      <p>{props.location}</p>
    </div>
  );
}

export default LogementTitle;