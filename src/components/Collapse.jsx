import { useState } from "react";
import React from "react";
import "../styles/components/Collapse.scss";
import ArrowCollapse from "./ArrowCollapse";
function Collapse(props) {
  const [isClicked, setIsClicked] = useState(props.openByDefault, false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <li>
      <div>
        <p onClick={handleClick} className="drop-down">
          {props.label}
          <ArrowCollapse
            className={
              isClicked
                ? "fa-solid fa-chevron-up drop"
                : "fa-solid fa-chevron-up"
            }
          />
        </p>
        <p className={`description ${isClicked ? "" : "closed"}`}>
          {props.description}
        </p>
      </div>
    </li>
  );
}

export default Collapse;
