import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/first-page.css';

export default function FirstPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const nameError = document.getElementsByClassName('name-error');
  const emailError = document.getElementsByClassName('email-error');
  const phoneNumError = document.getElementsByClassName('phone-number-error');

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneNumHandler = (e) => {
    setPhoneNum(e.target.value);
  };

  const pressEnterHandler = (e) => {
    if (name === '') {
      e.preventDefault();
      nameError[0].style.display = 'block';
      emailError[0].style.display = 'none';
      phoneNumError[0].style.display = 'none';
    } else if ((email === '') || (!email.includes('@'))) {
      e.preventDefault();
      nameError[0].style.display = 'none';
      emailError[0].style.display = 'block';
      phoneNumError[0].style.display = 'nonr';
    } else if ((phoneNum === '') || (!phoneNum.match(/^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/))) {
      e.preventDefault();
      nameError[0].style.display = 'none';
      emailError[0].style.display = 'none';
      phoneNumError[0].style.display = 'block';
    }
    return null;
  };

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
            <input value={name} onChange={nameHandler} type="text" className="first-page-input font" id="name" placeholder="e.g. Stephen King" required />
          </label>
          <h3 className="name-error font">Please fill in your name</h3>
          <label htmlFor="email-address" className="labelling-display font">
            <h4 className="labelling-header font">Email Address</h4>
            <input value={email} onChange={emailHandler} type="text" className="first-page-input font" id="email-address" placeholder="e.g. stephenking@lorem.com" required />
          </label>
          <h3 className="email-error font">Please fill in your email address correctly</h3>
          <label htmlFor="phone-number" className="labelling-display font">
            <h4 className="labelling-header font">Phone Number</h4>
            <input value={phoneNum} onChange={phoneNumHandler} type="text" className="first-page-input font" id="phone-number" placeholder="e.g. 1234567890" required />
          </label>
          <h3 className="phone-number-error font">Please fill with actual phone number</h3>
        </form>
      </section>
      <section className="first-page-footer">
        <NavLink className="desktop-ul-li" to="/secondPage" onClick={pressEnterHandler} activeclassname="active-link">
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
      </section>

    </div>
  );
}
