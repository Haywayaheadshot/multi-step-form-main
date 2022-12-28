import React from 'react';
// import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/fourth-page.css';

export default function FourthPageYearly() {
  const plans = useSelector((state) => state.plans);

  const slicedPlans = plans.slice((plans.length - 1));

  const totalAmountArr = [slicedPlans[0].amount];

  const addOns = useSelector((state) => state.addOns);
  for (let i = 0; i < addOns.length; i += 1) {
    totalAmountArr.push(addOns[i].amount);
  }

  function getSum(total, num) {
    return total + Math.round(num);
  }

  const totalAmount = totalAmountArr.reduce(getSum, 0);

  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Finishing Up</h1>
        <p className="first-page-info-description font">
          Double-check everything looks OK before confirming.
        </p>
        <div className="finish-up-container">
          { plans.map((plan) => (
            <section key="index" className="finish-up-container-section">
              <h1 className="selected-plan font">
                {plan.plan}
                (Yearly)
                <br />
                <NavLink to="/secondPage">
                  <span className="selected-plan-change font">Change</span>
                </NavLink>
              </h1>
              <section className="selected-plan-amount font">
                $
                {plan.amount}
                /yr
              </section>
            </section>
          ))}
          { addOns.map((addOn) => (
            <section key={addOn.id} className="finish-up-container-section">
              <h1 className="selected-plan-addOn font">{addOn.name}</h1>
              <span className="addOn-amount">
                +$
                {addOn.amount}
                /yr
              </span>
            </section>
          ))}
        </div>
        <section className="total-amount-div font">
          Total (per year)
          <span className="total-amount font">
            +$
            {totalAmount}
            /yr
          </span>
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
