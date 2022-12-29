import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import thankYou from '../assets/images/icon-thank-you.svg';
import '../styles/thank-you.css';

export default function ThankYou() {
  const plans = useSelector((state) => state.plans);
  const addOns = useSelector((state) => state.addOns);

  const startSubOver = () => {
    plans.length = 0;
    addOns.length = 0;
  };

  return (
    <div className="page-container">
      <section className="thank-you-container">
        <img src={thankYou} alt="Thank You" />
        <h1 className="thank-you-header font">Thank you!</h1>
        <p className="thank-you-description font">
          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at haywayaheadshotstrategy.
          fx@gmail.com.
        </p>
        <NavLink to="/">
          <button className="thank-you-home" onClick={startSubOver} type="button">
            Home
          </button>
        </NavLink>
      </section>
    </div>
  );
}
