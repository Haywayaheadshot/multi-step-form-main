import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav-bar.css';

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar-ul">
        <NavLink className="desktop-ul-li" to="/" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button">1</button>
          </li>
        </NavLink>
        <NavLink className="desktop-ul-li" to="/secondPage" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button">2</button>
          </li>
        </NavLink>
        <NavLink className="desktop-ul-li" to="/thirdPage" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button">3</button>
          </li>
        </NavLink>
        <NavLink className="desktop-ul-li" to="/fourthPage" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button">4</button>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
