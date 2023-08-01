import React from "react";
import Card from "../components/Card";
import {logementList } from "../data/data";
import "../styles/components/Gallery.scss";

function Gallery() {
  return (
    <div className="gallery">
      {logementList.map((e) => (
        <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
      ))}
    </div>
  );
}

export default Gallery;