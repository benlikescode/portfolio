import { breakpoint } from './breakpoint'
import { blueTheme, darkMode, lightMode } from './color'
import { elevation } from './elevation'
import { typeface } from './typeface'

export const theme = {
  color: darkMode,
  elevation,
  breakpoint,
  typeface,
}

export type Theme = typeof theme
