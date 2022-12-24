import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/second-page.css';
import selectPlan1 from '../assets/images/icon-arcade.svg';
import selectPlan2 from '../assets/images/icon-advanced.svg';
import selectPlan3 from '../assets/images/icon-pro.svg';
import { addPlan } from '../redux/confirmOrder/ConfirmOrder';

export default function SecondPage() {
  const [checked, setChecked] = useState();
  const dispatch = useDispatch();

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
        <div className="select-plan-container">
          <section role="presentation" className="select-plan-child" key="sp-one" id="sp-one" onClick={handleSelectedPlan}>
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
          <section role="presentation" className="select-plan-child" key="sp-two" id="sp-two" onClick={handleSelectedPlan}>
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
          <section role="presentation" className="select-plan-child" key="sp-three" id="sp-three" onClick={handleSelectedPlan}>
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
