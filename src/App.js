import React, { Component } from 'react';
import ThemeProvider from './ThemeProvider.js'
import Toggle from './Toggle.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <header className="App-header">
            <p>
              Night / Day
            </p>
          </header>
          <Toggle />
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
