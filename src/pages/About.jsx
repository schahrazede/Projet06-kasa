import React from "react";
import Banner from "../components/Banner";
import CollapseValeurs from "../components/CollapseValeurs";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <Banner imgSrc="../../assets/banner-home.png" />
      <CollapseValeurs />
      <Footer />
    </div>
  );
}

export default About;