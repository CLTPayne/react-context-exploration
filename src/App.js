import React, { Component } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeProvider.js'
import Toggle from './Toggle.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(context) => (
            <div className={`App ${context.state.theme}`}>
              <header className="App-header">
                <p>
                  Night / Day
                </p>
              </header>
              <Toggle />
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
