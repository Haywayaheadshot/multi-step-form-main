import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/third-page.css';

export default function ThirdPage() {
  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Pick add-ons</h1>
        <p className="first-page-info-description font">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="add-ons-container">
          <section className="add-ons-child">
            <input className="third-page-checkBox" type="checkbox" />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Online service</h2>
              <h4 className="add-ons-package-h4 font">Access to multiplayer games</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$1/mo</h4>
              <h4 className="yearly-addOns font">+$10/yr</h4>
            </div>
          </section>
          <section className="add-ons-child">
            <input className="third-page-checkBox" type="checkbox" />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Larger storage</h2>
              <h4 className="add-ons-package-h4 font">Extra 1TB of cloud save</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$2/mo</h4>
              <h4 className="yearly-addOns font">+$20/yr</h4>
            </div>
          </section>
          <section className="add-ons-child">
            <input className="third-page-checkBox" type="checkbox" />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Customizable Profile</h2>
              <h4 className="add-ons-package-h4 font">Custom theme on your profile</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$2/mo</h4>
              <h4 className="yearly-addOns font">+$20/yr</h4>
            </div>
          </section>
        </div>
      </section>
      <section className="second-page-footer">
        <NavLink to="/secondPage">
          <button className="sp-go-back-btn font" type="button">Go Back</button>
        </NavLink>
        <NavLink to="/fourthPage">
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
      </section>
    </div>
  );
}
