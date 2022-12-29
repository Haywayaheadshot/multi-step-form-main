import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav-bar.css';

export default function NavBar() {
  const navBtnHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="nav-bar-container">
      <ul className="nav-bar-ul">
        <NavLink className="desktop-ul-li" to="/" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button" onClick={navBtnHandler}>1</button>
            <section onClick={navBtnHandler} role="presentation" className="for-desk nav-desk">
              <h4 className="desk-nav-btn-head font">Step 1</h4>
              <h3 className="desk-nav-btn-desc font">YOUR INFO</h3>
            </section>
          </li>
        </NavLink>
        <NavLink className="desktop-ul-li" to="/secondPage" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button" onClick={navBtnHandler}>2</button>
            <section onClick={navBtnHandler} role="presentation" className="for-desk nav-desk">
              <h4 className="desk-nav-btn-head font">Step 2</h4>
              <h3 className="desk-nav-btn-desc font">SELECT PLAN</h3>
            </section>
          </li>
        </NavLink>
        <NavLink className="desktop-ul-li" to="/thirdPage" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button" onClick={navBtnHandler}>3</button>
            <section onClick={navBtnHandler} role="presentation" className="for-desk nav-desk">
              <h4 className="desk-nav-btn-head font">Step 3</h4>
              <h3 className="desk-nav-btn-desc font">ADD ONS</h3>
            </section>
          </li>
        </NavLink>
        <NavLink className="desktop-ul-li" to="/fourthPage" activeclassname="active-link">
          <li className="nav-bar-ul-li">
            <button className="nav-bar-btns font" type="button" onClick={navBtnHandler}>4</button>
            <section onClick={navBtnHandler} role="presentation" className="for-desk nav-desk">
              <h4 className="desk-nav-btn-head font">Step 4</h4>
              <h3 className="desk-nav-btn-desc font">SUMMARY</h3>
            </section>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
