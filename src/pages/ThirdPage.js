import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addAddOns } from '../redux/addOns/AddOns';
import '../styles/third-page.css';

export default function ThirdPage() {
  const [chosen, setChosen] = useState(false);

  const dispatch = useDispatch();

  const handleSelectedAddOn = (key) => {
    setChosen((chosen) => !chosen);
    if ((key.target.id === 'add-on-one')) {
      if (chosen) {
        dispatch(addAddOns({
          id: 'add-on-one',
          name: 'Online Service',
          amount: '1',
        }));
      }
    } else if ((key.target.id === 'add-on-two')) {
      if (key.target.value === 'true') {
        dispatch(addAddOns({
          id: 'add-on-two',
          name: 'Larger Storage',
          amount: '2',
        }));
      }
    } else if ((key.target.id === 'add-on-three')) {
      if (key.target.value === 'true') {
        dispatch(addAddOns({
          id: 'add-on-two',
          name: 'Customizable Profile',
          amount: '2',
        }));
      }
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
            <input className="third-page-checkBox" id="add-on-one" type="checkbox" value={chosen} />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Online service</h2>
              <h4 className="add-ons-package-h4 font">Access to multiplayer games</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$1/mo</h4>
            </div>
          </section>
          <section className="add-ons-child" key="add-on-two" onClick={handleSelectedAddOn} role="presentation">
            <input className="third-page-checkBox" id="add-on-two" type="checkbox" value={chosen} />
            <div className="add-ons-package">
              <h2 className="add-ons-package-h2 font">Larger storage</h2>
              <h4 className="add-ons-package-h4 font">Extra 1TB of cloud save</h4>
            </div>
            <div>
              <h4 className="monthly-addOns font">+$2/mo</h4>
            </div>
          </section>
          <section className="add-ons-child" key="add-on-three" onClick={handleSelectedAddOn} role="presentation">
            <input className="third-page-checkBox" id="add-on-three" type="checkbox" value={chosen} />
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
