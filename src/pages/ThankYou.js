import React from 'react';
import { NavLink } from 'react-router-dom';
import thankYou from '../assets/images/icon-thank-you.svg';
import '../styles/thank-you.css';

export default function ThankYou() {
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
          <button className="thank-you-home" type="button">
            Home
          </button>
        </NavLink>
      </section>
    </div>
  );
}
