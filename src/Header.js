import React from "react";
import "./css/Header.css";
import rocket from "./img/rocket.svg";
import profileIcon from "./img/profileIcon.svg";
import menu from "./img/menu.svg";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="Header">
        <div className="logo-block">
          <div className="name">QA Launch</div>
          <img className="rocket" src={rocket} alt="logo"/>
        </div>
        <div className="search-block"></div>
        <div className="profile-block">
            <div className="name-block">
                <div className="first-name">Arina</div>
                <div className="last-name">Zaitseva</div>
            </div>
            <img className="profile-icon" src={profileIcon} alt="profile-icon"/>
            <img className="menu" src={menu} alt="menu"/>
        </div>
      </header>
    </div>
  );
}

export default Header;
