import React from 'react';
import Button from './Button.js';

const Toggle = props => {
  return (
    <div className="theme-toggle">
      <h4>Toggle</h4>
      <div>
        <Button
          changeTheme={props.changeTheme}
          theme={props.theme}
        />
      </div>
    </div>
  )
}

export default Toggle;
