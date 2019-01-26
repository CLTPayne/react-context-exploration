import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    theme: 'theme-night'
  }

  changeTheme = () => {
    switch (this.state.theme) {
      case 'theme-night':
        return this.setState({ theme: 'theme-day' });
      case 'theme-day':
        return this.setState({ theme: 'theme-night' });
      default: return null;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Night / Day
          </p>
        </header>
        <Toggle
          changeTheme={this.changeTheme}
          theme={this.state.theme}
        />
      </div>
    );
  }
}

export default App;
