import React from "react";
import "../styles/components/Carrousel.scss";
function Carrousel(props) {
  return (
    <img className={props.className} src={props.imgSrc} alt={props.title} />
  );
}

export default Carrousel;