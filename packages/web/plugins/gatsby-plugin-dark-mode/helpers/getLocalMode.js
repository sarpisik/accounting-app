import { MODE } from "../constants"

export default function getLocalMode(mode) {
  const isBrowser = mode === MODE.browser
  const localeMode = isBrowser && window.localStorage.getItem("mode")

  return localeMode ? localeMode : "dark"
}
