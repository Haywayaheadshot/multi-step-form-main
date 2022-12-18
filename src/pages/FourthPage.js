import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import '../styles/fourth-page.css';

export default function FourthPage() {
  const plans = useSelector((state) => state.plans);
  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Finishing Up</h1>
        <p className="first-page-info-description font">
          Double-check everything looks OK before confirming.
        </p>
        <div className="finish-up-container">
          <section className="finish-up-container-section">
            <h1 className="selected-plan font">
              {plans[0].plan}
              (Monthly)
              <br />
              <NavLink to="/secondPage">
                <span className="selected-plan-change font">Change</span>
              </NavLink>
            </h1>
            <section className="selected-plan-amount font">
              $
              {plans[0].amount}
              /mo
            </section>
          </section>
          <section className="finish-up-container-section">
            <h1 className="selected-plan-addOn font">Online service</h1>
          </section>
          <section className="finish-up-container-section">
            <h1 className="selected-plan-addOn font">Local storage</h1>
          </section>
        </div>
        <section className="total-amount-div font">
          Total (per month)
          <span className="font">+$12/month</span>
        </section>
      </section>
      <section className="second-page-footer">
        <NavLink to="/thirdPage">
          <button className="sp-go-back-btn font" type="button">Go Back</button>
        </NavLink>
        <NavLink to="/thankYou">
          <button className="lp-confirm-btn font" type="button">Confirm</button>
        </NavLink>
      </section>
    </div>
  );
}

// FourthPage.propTypes = {
//   plan: PropTypes.string.isRequired,
// };
