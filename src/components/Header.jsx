import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="../assets/logo.png" alt="Logo Kasa" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;