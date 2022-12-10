import React, { useState } from 'react';
import '../../styles/switch.css';

function Switch() {
  const [checked, setChecked] = useState({
    checked: false,
    setChecked: true,
  });
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
