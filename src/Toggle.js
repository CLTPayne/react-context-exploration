const Toggle = props => {
  return (
    <div className="theme-toggle">
      <h4>Toggle</h4>
      <div>
        <Button
          changeTheme={props.changeTheme}
          theme={props.theme}
        />
      </div>
    </div>
  )
}
