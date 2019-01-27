import React from 'react';
import { ThemeContext } from './ThemeProvider.js'

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
          <label
            className="switch"
            onClick={context.changeTheme}>
            <input type="checkbox" />
            <span className="slider" />
          </label>
      )}
    </ThemeContext.Consumer>
  )
}

export default Button;
