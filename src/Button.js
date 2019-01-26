const Button = props => {
  const { theme } = props;

  return (
    <button
      className={`btn ${theme}`}
      onClick={props.changeTheme}>
      Change Theme
    </button>
  )
}
