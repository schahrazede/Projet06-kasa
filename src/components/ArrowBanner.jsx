import React from "react";
import "../styles/components/ArrowBanner.scss";

function ArrowBanner(props) {
  return <i onClick={props.onClick} className={props.className}></i>;
}

export default ArrowBanner;