import React from "react"
import { DarkModeProvider } from "./DarkModeProvider"
import { MODE } from "./constants"

export const wrapRootElement = ({ element }) => {
  return <DarkModeProvider mode={MODE["browser"]}>{element}</DarkModeProvider>
}
