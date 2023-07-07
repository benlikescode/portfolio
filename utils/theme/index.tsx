import { breakpoint } from './breakpoint'
import { blueTheme } from './color'
import { elevation } from './elevation'

const theme = {
  color: blueTheme,
  elevation,
  breakpoint,
}

export type Theme = typeof theme
