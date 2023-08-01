import React from "react";
import "../styles/components/LogementBanner.scss";
function LogementBanner(props) {
  return (
    <img className={props.className} src={props.imgSrc} alt={props.title} />
  );
}

export default LogementBanner;