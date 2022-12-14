import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/second-page.css';
import selectPlan1 from '../assets/images/icon-arcade.svg';
import selectPlan2 from '../assets/images/icon-advanced.svg';
import selectPlan3 from '../assets/images/icon-pro.svg';
import { addPlan } from '../redux/confirmOrder/ConfirmOrder';

export default function SecondPage() {
  const [checked, setChecked] = useState();
  const dispatch = useDispatch();

  const plans = useSelector((state) => state.plans);

  const planError = document.getElementsByClassName('choose-plan-error');

  const toThirdPage = (e) => {
    if (plans.length === 0) {
      e.preventDefault();
      planError[0].style.display = 'block';
    }
  };

  const handleSelectedPlan = (key) => {
    if (key.target.id) {
      if (key.target.id === 'sp-one') {
        if (checked) {
          dispatch(addPlan({
            id: 'sp-one',
            plan: 'Arcade',
            amount: '90',
          }));
        } else {
          dispatch(addPlan({
            id: 'sp-one',
            plan: 'Arcade',
            amount: '9',
          }));
        }
      } else if (key.target.id === 'sp-two') {
        if (checked) {
          dispatch(addPlan({
            id: 'sp-two',
            plan: 'Advanced',
            amount: '120',
          }));
        } else {
          dispatch(addPlan({
            id: 'sp-two',
            plan: 'Advanced',
            amount: '12',
          }));
        }
      } if (key.target.id === 'sp-three') {
        if (checked) {
          dispatch(addPlan({
            id: 'sp-three',
            plan: 'Pro',
            amount: '150',
          }));
        } else {
          dispatch(addPlan({
            id: 'sp-three',
            plan: 'Pro',
            amount: '15',
          }));
        }
      }
    }
  };

  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Select your plan</h1>
        <p className="first-page-info-description font">
          You have the option of monthly or yearly billing.
        </p>
        <h3 className="choose-plan-error font">Please Choose A Plan</h3>
        <div className="select-plan-container">
          <section role="presentation" className="select-plan-child" id="sp-one" onClick={handleSelectedPlan}>
            <img role="presentation" id="sp-one" src={selectPlan1} alt="Arcade Plan" />
            <div role="presentation" id="sp-one" className="plan-child-details">
              <h2 role="presentation" id="sp-one" className="plan-child-details-h2 font">Arcade</h2>
              { !checked && (<h4 className="plan-child-details-h4 font">$9/mo</h4>) }
              { checked && (
                <>
                  <h4 className="plan-child-details-h4 font">$90/yr</h4>
                  <h4 className="yearly-discount font">2 months free</h4>
                </>
              ) }
            </div>
          </section>
          <section role="presentation" className="select-plan-child" id="sp-two" onClick={handleSelectedPlan}>
            <img role="presentation" src={selectPlan2} id="sp-two" alt="Advanced Plan" />
            <div role="presentation" className="plan-child-details" id="sp-two">
              <h2 role="presentation" className="plan-child-details-h2 font" id="sp-two">Advanced</h2>
              { !checked && (<h4 className="plan-child-details-h4 font">$12/mo</h4>) }
              { checked && (
                <>
                  <h4 className="plan-child-details-h4 font">$120/yr</h4>
                  <h4 className="yearly-discount font">2 months free</h4>
                </>
              ) }
            </div>
          </section>
          <section role="presentation" className="select-plan-child" id="sp-three" onClick={handleSelectedPlan}>
            <img role="presentation" src={selectPlan3} alt="Pro Plan" id="sp-three" />
            <div role="presentation" className="plan-child-details" id="sp-three">
              <h2 role="presentation" className="plan-child-details-h2 font" id="sp-three">Pro</h2>
              { !checked && (<h4 className="plan-child-details-h4 font">$15/mo</h4>) }
              { checked && (
                <>
                  <h4 className="plan-child-details-h4 font">$150/yr</h4>
                  <h4 className="yearly-discount font">2 months free</h4>
                </>
              ) }
            </div>
          </section>
        </div>
        <section className="monthly-yearly-choice">
          <h4 className="font">Monthly</h4>
          <label htmlFor="switch" className="switch-label">
            <input
              onClick={() => setChecked((checked) => !checked)}
              className="switch-input"
              id="switch"
              type="checkbox"
            />
            <span className="switch-slider" />
          </label>
          <h4 className="font">Yearly</h4>
        </section>
      </section>
      <section className="second-page-footer">
        <NavLink to="/">
          <button className="sp-go-back-btn font" type="button">Go Back</button>
        </NavLink>
        { !checked && (
        <NavLink to="/thirdPage" onClick={toThirdPage}>
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
        ) }
        { checked && (
        <NavLink to="/thirdPageYearly" onClick={toThirdPage}>
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
        ) }
      </section>
    </div>
  );
}
