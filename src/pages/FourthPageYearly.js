import React from 'react';
// import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/fourth-page.css';

export default function FourthPageYearly() {
  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Finishing Up</h1>
        <p className="first-page-info-description font">
          Double-check everything looks OK before confirming.
        </p>
        <div className="finish-up-container">
          <section>
            <h1>Plan</h1>
          </section>
          <section>
            <h1>Plan</h1>
          </section>
          <section>
            <h1>Plan</h1>
          </section>
        </div>
        <section className="total-amount-div font">
          Total (per month)
          <span className="font">+$12/month</span>
        </section>
      </section>
      <section className="second-page-footer">
        <NavLink to="/thirdPageYearly">
          <button className="sp-go-back-btn font" type="button">Go Back</button>
        </NavLink>
        <NavLink to="/thankYou">
          <button className="lp-confirm-btn font" type="button">Confirm</button>
        </NavLink>
      </section>
    </div>
  );
}