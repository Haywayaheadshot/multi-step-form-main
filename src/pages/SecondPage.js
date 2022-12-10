import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Switch from '../components/dep/Switch';
import '../styles/second-page.css';
import '../styles/switch.css';
import selectPlan1 from '../assets/images/icon-arcade.svg';
import selectPlan2 from '../assets/images/icon-advanced.svg';
import selectPlan3 from '../assets/images/icon-pro.svg';

export default function SecondPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Select your plan</h1>
        <p className="first-page-info-description font">
          You have the option of monthly or yearly billing.
        </p>
        <div className="select-plan-container">
          <section className="select-plan-child">
            <img src={selectPlan1} alt="Arcade Plan" />
            <div className="plan-child-details">
              <h2 className="plan-child-details-h2 font">Arcade</h2>
              { !checked && (<h4 className="plan-child-details-h4 font">$9/mo</h4>) }
              { checked && (
                <>
                  <h4 className="plan-child-details-h4 font">$90/yr</h4>
                  <h4 className="yearly-discount font">2 months free</h4>
                </>
              ) }
            </div>
          </section>
          <section className="select-plan-child">
            <img src={selectPlan2} alt="Advanced Plan" />
            <div className="plan-child-details">
              <h2 className="plan-child-details-h2 font">Advanced</h2>
              { !checked && (<h4 className="plan-child-details-h4 font">$12/mo</h4>) }
              { checked && (
                <>
                  <h4 className="plan-child-details-h4 font">$120/yr</h4>
                  <h4 className="yearly-discount font">2 months free</h4>
                </>
              ) }
            </div>
          </section>
          <section className="select-plan-child">
            <img src={selectPlan3} alt="Pro Plan" />
            <div className="plan-child-details">
              <h2 className="plan-child-details-h2 font">Pro</h2>
              { !checked && (<h4 className="plan-child-details-h4 font">$15/mo</h4>) }
              { checked && (
                <>
                  <h4 className="plan-child-details-h4 font">$150/yr</h4>
                  <h4 className="yearly-discount font">2 months free</h4>
                </>
              ) }
            </div>
          </section>
          <section className="select-plan-child">
            <h4>Monthly</h4>
            {/* <Switch /> */}
            <label htmlFor="switch" className="switch-label">
              <input
                onClick={() => setChecked((checked) => !checked)}
                className="switch-input"
                id="switch"
                type="checkbox"
              />
              <span className="switch-slider" />
            </label>
            <h4>Yearly</h4>
          </section>
        </div>
      </section>
      <section className="second-page-footer">
        <NavLink to="/">
          <button className="sp-go-back-btn font" type="button">Go Back</button>
        </NavLink>
        { !checked && (
        <NavLink to="/thirdPage">
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
        ) }
        { checked && (
        <NavLink to="/thirdPageYearly">
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
        ) }
      </section>
    </div>
  );
}
