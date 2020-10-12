import React from "react"
import PropTypes from "prop-types"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider as TP } from "@material-ui/core/styles"

import { useDarkMode } from "../gatsby-plugin-dark-mode/DarkModeProvider"
import { getThemeByName } from "./themes"

export default function ThemeProvider(props) {
  const { mode } = useDarkMode()

  return (
    <TP theme={getThemeByName(mode)}>
      <CssBaseline />
      {props.children}
    </TP>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}
