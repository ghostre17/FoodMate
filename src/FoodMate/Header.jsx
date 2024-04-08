import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Index.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar">
        <h2>FoodMate</h2>
        <ul className="navbar-list">
          <li className="navbar-list-link">
            <Link className={`link ${location.pathname === "/" ? "active-link" : ""}`} to="/">
              Beranda
            </Link>
          </li>
          <li className="navbar-list-link">
            <Link className={`link ${location.pathname === "/FoodStok" ? "active-link" : ""}`} to="/FoodStok">
              FoodStok
            </Link>
          </li>
          <li className="navbar-list-link">
            <Link className={`link ${location.pathname === "/FoodEdu" ? "active-link" : ""}`} to="/FoodEdu">
              FoodEdu
            </Link>
          </li>
          <li className="navbar-list-link">
            <Link className={`link ${location.pathname === "/FoodDisc" ? "active-link" : ""}`} to="/FoodDisc">
              FoodDisc
            </Link>
          </li>
        </ul>
        <ul className="navbar-list">
          <li className="navbar-list-link">
            <a className="link" href="#">Login</a>
          </li>
          <li className="navbar-list-link">
            <a className="link" href="#">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
