import React from "react";
import "../styles/components/Tag.scss";

function Tag(props) {
  return (
    <div className="tag">
      <span>{props.tag}</span>
    </div>
  );
}

export default Tag;