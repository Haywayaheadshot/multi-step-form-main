import React from 'react';
import '../styles/nav-bar.css';

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar-ul">
        <li className="nav-bar-ul-li">
          <button className="nav-bar-btns" type="button">1</button>
        </li>
        <li className="nav-bar-ul-li">
          <button className="nav-bar-btns" type="button">2</button>
        </li>
        <li className="nav-bar-ul-li">
          <button className="nav-bar-btns" type="button">3</button>
        </li>
        <li className="nav-bar-ul-li">
          <button className="nav-bar-btns" type="button">4</button>
        </li>
      </ul>
    </div>
  );
}
