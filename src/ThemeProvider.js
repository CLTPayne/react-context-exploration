import React from 'react';

export const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    theme: 'theme-night',
  }

  changeTheme = () => {
    const { theme: currentTheme } = this.state;

    switch (currentTheme) {
      case 'theme-night':
        return this.setState({ theme: 'theme-day' });
      case 'theme-day':
        return this.setState({ theme: 'theme-night' });
      default: return null;
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        state: this.state,
        changeTheme: this.changeTheme,
      }}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider;
