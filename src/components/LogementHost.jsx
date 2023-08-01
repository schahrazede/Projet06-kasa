import React from "react";
import "../styles/components/LogementHost.scss";
function LogementHost(props) {
  return (
    <div className="logement-host">
      <span>{props.hostName}</span>
      <img src={props.hostPicture} alt={`portrait de ${props.hostName}`} />
    </div>
  );
}

export default LogementHost;