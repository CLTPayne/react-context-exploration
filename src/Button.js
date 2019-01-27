import React from 'react';
import { ThemeContext } from './ThemeProvider.js'

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
          <label className="switch">
            <input
              type="checkbox"
              onClick={context.changeTheme} />
            <span className="slider" />
          </label>
      )}
    </ThemeContext.Consumer>
  )
}

export default Button;
