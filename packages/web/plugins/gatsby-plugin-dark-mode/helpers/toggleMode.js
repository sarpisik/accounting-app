import { ENUM } from "../constants"

export default function toggleTheme(themeName) {
  return ENUM[themeName]
}
