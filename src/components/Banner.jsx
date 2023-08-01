import React from "react";
import "../styles/components/Banner.scss";
function Banner(props) {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <img src={props.imgSrc} alt="Banniere" />
      {props.title ? <h1>{props.title}</h1> : null}
    </div>
  );
}

export default Banner;