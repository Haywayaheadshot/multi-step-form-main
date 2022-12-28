import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addAddOns, removeAddOns } from '../redux/addOns/AddOns';
import '../styles/third-page.css';

export default function ThirdPageYearly() {
  const plans = useSelector((state) => state.plans);
  const addOns = useSelector((state) => state.addOns);

  const addOnsError = document.getElementsByClassName('add-ons-error');
  const dispatch = useDispatch();

  const backToPage2 = () => {
    plans.length = 0;
    // console.log(plans);
  };

  const toFourthPage = (e) => {
    if (addOns.length === 0) {
      e.preventDefault();
      addOnsError[0].style.display = 'block';
    }
  };

  const handleSelectedAddOn1 = (e) => {
    if (e.target.checked === false) {
      dispatch(removeAddOns({ id: 'add-on-one' }));
    } else {
      dispatch(addAddOns({
        id: 'add-on-one',
        name: 'Online service',
        amount: '10',
      }));
    }
  };

  const handleSelectedAddOn2 = (e) => {
    if (e.target.checked === false) {
      dispatch(removeAddOns({ id: 'add-on-two' }));
    } else {
      dispatch(addAddOns({
        id: 'add-on-two',
        name: 'Larger Storage',
        amount: '10',
      }));
    }
  };

  const handleSelectedAddOn3 = (e) => {
    if (e.target.checked === false) {
      dispatch(removeAddOns({ id: 'add-on-three' }));
    } else {
      dispatch(addAddOns({
        id: 'add-on-three',
        name: 'Customizable Profile',
        amount: '20',
      }));
    }
  };

  return (
    <div className="page-container">
      <section className="first-page-container">
        <h1 className="first-page-header font">Pick add-ons</h1>
        <p className="first-page-info-description font">
          Add-ons help enhance your gaming experience.
        </p>
        <h3 className="add-ons-error font">Please choose add ons</h3>
        <div className="add-ons-container">
          <section className="add-ons-child">
            <input className="third-page-checkBox" id="add-on-one-true" onClick={handleSelectedAddOn1} type="checkbox" />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Online service</h2>
              <h4 className="add-ons-package-h4 font">Access to multiplayer games</h4>
            </div>
            <div>
              <h4 className="yearly-addOns font">+$10/yr</h4>
            </div>
          </section>
          <section className="add-ons-child">
            <input className="third-page-checkBox" id="add-on-two-true" key="add-on-two-true" onClick={handleSelectedAddOn2} type="checkbox" />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Larger storage</h2>
              <h4 className="add-ons-package-h4 font">Extra 1TB of cloud save</h4>
            </div>
            <div>
              <h4 className="yearly-addOns font">+$20/yr</h4>
            </div>
          </section>
          <section className="add-ons-child">
            <input className="third-page-checkBox" id="add-on-three-true" key="add-on-three-true" onClick={handleSelectedAddOn3} type="checkbox" />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Customizable Profile</h2>
              <h4 className="add-ons-package-h4 font">Custom theme on your profile</h4>
            </div>
            <div>
              <h4 className="yearly-addOns font">+$20/yr</h4>
            </div>
          </section>
        </div>
      </section>
      <section className="second-page-footer">
        <NavLink to="/secondPage" onClick={backToPage2}>
          <button className="sp-go-back-btn font" type="button">Go Back</button>
        </NavLink>
        <NavLink to="/fourthPageYearly" onClick={toFourthPage}>
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
      </section>
    </div>
  );
}
