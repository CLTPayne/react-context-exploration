import React from 'react';
import { ThemeContext } from './ThemeProvider.js'

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <React.Fragment>
          <button
            className="btn"
            onClick={context.changeTheme}>
            Change Theme
          </button>
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  )
}

export default Button;
