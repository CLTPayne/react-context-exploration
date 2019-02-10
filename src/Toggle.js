import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider.js'
import Button from './Button.js';

const Toggle = () => {
  const context = useContext(ThemeContext)
  return (
    <div className={`app ${context.state.theme}`}>
      <header className="app-header">
        <p>
          Night / Day
        </p>
      </header>
      <div className="theme-toggle">
        <Button />
      </div>
    </div>
  )
}

export default Toggle;
