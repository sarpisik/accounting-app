import React from "react"
import ThemeProvider from "./ThemeProvider"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
