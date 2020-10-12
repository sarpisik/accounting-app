import { createMuiTheme } from "@material-ui/core/styles"

import dark from "./dark.json"
import light from "./light.json"
import shared from "./shared.json"

const THEMES = [light, dark].reduce((themes, theme) => {
  const color =
    theme.palette.type === "light"
      ? shared.palette.primary.dark
      : shared.palette.primary.light

  themes[theme.palette.type] = createMuiTheme({
    palette: { ...theme.palette, ...shared.palette },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: { fontSize: "1rem", lineHeight: 1.6 },
          a: {
            textDecoration: "none",
            color,
            "&:hover": { textDecoration: "underline" },
          },
          blockquote: {
            margin: "3rem 0",
            padding: "1.5rem",
            borderLeft: `0.25rem solid ${shared.palette.primary.main}`,
            backgroundColor: "rgba(76, 76, 76,0.2)",
            "& *": { margin: 0 },
          },
          "article blockquote": { margin: 0 },
        },
      },
      MuiTypography: {
        colorPrimary: { color },
      },
    },
    custom: { spacing: { big: 6 } },
  })

  return themes
}, {})

export function getThemeByName(themeName) {
  return THEMES[themeName]
}
