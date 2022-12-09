import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/first-page.css';

export default function FirstPage() {
  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Personal info</h1>
        <p className="first-page-info-description font">
          Please provide your name, email address, and phone number.
        </p>
        <form>
          <label htmlFor="name" className="labelling-display font">
            <h4 className="labelling-header font">Name</h4>
            <input type="text" className="first-page-input font" id="name" placeholder="e.g. Stephen King" required />
          </label>
          <label htmlFor="email-address" className="labelling-display font">
            <h4 className="labelling-header font">Email Address</h4>
            <input type="text" className="first-page-input font" id="email-address" placeholder="e.g. stephenking@lorem.com" required />
          </label>
          <label htmlFor="phone-number" className="labelling-display font">
            <h4 className="labelling-header font">Phone Number</h4>
            <input type="text" className="first-page-input font" id="phone-number" placeholder="e.g. +1 234 567 890" required />
          </label>
        </form>
      </section>
      <section className="first-page-footer">
        <NavLink className="desktop-ul-li" to="/secondPage" activeclassname="active-link">
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
      </section>

    </div>
  );
}
