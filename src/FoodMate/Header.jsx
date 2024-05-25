import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Index.css";

function Header() {
  const location = useLocation();

  const Logout = () =>  {
    sessionStorage.removeItem('user')

    window.location.href = '/Login'
    alert('Logout success')
  }

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
            <a className="link" onClick={(Logout)} href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
