import React from 'react'

const DarkModeToggle = ({isDarkMode, setisDarkMode}) => {
  // TODO: Implement dark mode toggle logic
  function handleToggle(){
    setisDarkMode(prev => !prev)
  }

  return (
    <button onClick={handleToggle}>toggle {isDarkMode?'dark':'light'}</button>
  )
}

export default DarkModeToggle
