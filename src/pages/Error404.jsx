import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/Error404.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <Header />
      <main className="error404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">
          <span>Retourner sur la page d’accueil</span>
        </Link>
      </main>
      <Footer/>
    </div>
  );
}

export default Error404;