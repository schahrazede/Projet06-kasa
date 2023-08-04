import { useState } from "react";
import React from "react";
import "../styles/components/Collapse.scss";
import ArrowCollapse from "./ArrowCollapse";
function Collapse(props) {
  const [isClicked, setIsClicked] = useState(props.openByDefault || false);
 
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <li>
      <div >
        <p onClick={handleClick} className="content">
          {props.label}
          <ArrowCollapse
            className={
              isClicked
                ? "fa-solid fa-chevron-up arrow"
                : "fa-solid fa-chevron-up"
            }
          />
        </p>
        <p className={`description ${isClicked ? "opened" : "closed"}`}>
          {props.description}
        </p>
      </div>
    </li>
  );
}

export default Collapse;



