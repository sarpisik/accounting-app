import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

import { getLocalMode, toggleMode } from "./helpers"

const DarkModeContext = React.createContext()

export function useDarkMode() {
  return React.useContext(DarkModeContext)
}

export function DarkModeProvider(props) {
  const [mode, setMode] = React.useState(getLocalMode(props.mode))

  const handleDarkModeToggle = React.useCallback(() => {
    setMode(toggleMode(mode))
  }, [mode])

  React.useEffect(() => {
    localStorage.setItem("mode", mode)
  }, [mode])

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <DarkModeContext.Provider value={{ mode, handleDarkModeToggle }}>
        {props.children}
      </DarkModeContext.Provider>
    </React.Fragment>
  )
}

DarkModeProvider.propTypes = {
  children: PropTypes.node,
}
