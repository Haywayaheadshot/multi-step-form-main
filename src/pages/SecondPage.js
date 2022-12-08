import React from 'react';
// import { Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../styles/second-page.css';
import selectPlan1 from '../assets/images/icon-arcade.svg';
import selectPlan2 from '../assets/images/icon-advanced.svg';
import selectPlan3 from '../assets/images/icon-pro.svg';

export default function SecondPage() {
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
              <h4 className="plan-child-details-h4 font">$9/mo</h4>
            </div>
          </section>
          <section className="select-plan-child">
            <img src={selectPlan2} alt="Advanced Plan" />
            <div className="plan-child-details">
              <h2 className="plan-child-details-h2 font">Advanced</h2>
              <h4 className="plan-child-details-h4 font">$12/mo</h4>
            </div>
          </section>
          <section className="select-plan-child">
            <img src={selectPlan3} alt="Pro Plan" />
            <div className="plan-child-details">
              <h2 className="plan-child-details-h2 font">Pro</h2>
              <h4 className="plan-child-details-h4 font">$15/mo</h4>
            </div>
          </section>
          <section className="select-plan-child">
            <h4>Monthly</h4>
            {/* <Switch defaultChecked /> */}
            <h4>Yearly</h4>
          </section>
        </div>
      </section>
      <section className="second-page-footer">
        <NavLink to="/">
          <button className="fp-next-page-btn font" type="button">Go Back</button>
        </NavLink>
        <NavLink to="/thirdPage">
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
      </section>
    </div>
  );
}
