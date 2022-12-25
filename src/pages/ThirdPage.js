import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addAddOns, removeAddOns } from '../redux/addOns/AddOns';
import '../styles/third-page.css';

export default function ThirdPage() {
  const [chosen, setChosen] = useState(false);
  const [chosen1, setChosen1] = useState(false);
  const [chosen2, setChosen2] = useState(false);

  const dispatch = useDispatch();

  const handleSelectedAddOn1 = (key) => {
    setChosen1((chosen) => !chosen);

    if ((key.target.value === 'unchecked')) {
      dispatch(addAddOns({
        id: 'add-on-two',
        name: 'Larger Storage',
        amount: '2',
        value: { chosen1 },
      }));
    } else if (key.target.value === 'on') {
      dispatch(removeAddOns({
        id: 'add-on-two',
      }));
    }
  };

  const handleSelectedAddOn2 = (key) => {
    setChosen2((chosen) => !chosen);

    if ((key.target.value === 'unchecked')) {
      dispatch(addAddOns({
        id: 'add-on-three',
        name: 'Customizable Profile',
        amount: '2',
        value: { chosen2 },
      }));
    } else if (key.target.value === 'on') {
      dispatch(removeAddOns({
        id: 'add-on-three',
      }));
    }
  };

  const handleSelectedAddOn = (key) => {
    setChosen((chosen) => !chosen);

    if ((key.target.value === 'unchecked')) {
      dispatch(addAddOns({
        id: 'add-on-one',
        name: 'Online Service',
        amount: '1',
        value: { chosen },
      }));
    } else if (key.target.value === 'on') {
      dispatch(removeAddOns({
        id: 'add-on-one',
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
        <div className="add-ons-container">
          <section className="add-ons-child" key="add-on-one" onClick={handleSelectedAddOn} role="presentation">
            { chosen && (<input className="third-page-checkBox" id="add-on-one" type="checkbox" defaultChecked />) }
            { !chosen && (<input className="third-page-checkBox" id="add-on-one" type="checkbox" value="unchecked" />) }
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Online service</h2>
              <h4 className="add-ons-package-h4 font">Access to multiplayer games</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$1/mo</h4>
            </div>
          </section>
          <section className="add-ons-child" key="add-on-two" onClick={handleSelectedAddOn1} role="presentation">
            { chosen1 && (<input className="third-page-checkBox" id="add-on-two" type="checkbox" defaultChecked />) }
            { !chosen1 && (<input className="third-page-checkBox" id="add-on-two" type="checkbox" value="unchecked" />) }
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Larger storage</h2>
              <h4 className="add-ons-package-h4 font">Extra 1TB of cloud save</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$2/mo</h4>
            </div>
          </section>
          <section className="add-ons-child" key="add-on-three" onClick={handleSelectedAddOn2} role="presentation">
            { chosen2 && (<input className="third-page-checkBox" id="add-on-three" type="checkbox" defaultChecked />) }
            { !chosen2 && (<input className="third-page-checkBox" id="add-on-three" type="checkbox" value="unchecked" />) }
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Customizable Profile</h2>
              <h4 className="add-ons-package-h4 font">Custom theme on your profile</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$2/mo</h4>
            </div>
          </section>
        </div>
      </section>
      <section className="second-page-footer">
        <NavLink to="/secondPage">
          <button className="sp-go-back-btn font" type="button">Go Back</button>
        </NavLink>
        <NavLink to="/fourthPage">
          <button className="fp-next-page-btn font" type="button">Next Step</button>
        </NavLink>
      </section>
    </div>
  );
}
