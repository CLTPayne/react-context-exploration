import React from 'react';

const Button = props => {
  const { theme } = props;

  return (
    <button
      className={`${theme}`}
      onClick={props.changeTheme}>
      Change Theme
    </button>
  )
}

export default Button;
