import React from 'react';
import '../../styles/switch.css';

function Switch() {
  return (
    <div>
      <label htmlFor="switch" className="switch-label">
        <input className="switch-input" id="switch" type="checkbox" />
        <span className="switch-slider" />
      </label>
    </div>
  );
}

export default Switch;
