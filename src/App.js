import React, { Component } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeProvider.js'
import Toggle from './Toggle.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>
    );
  }
}

export default App;
