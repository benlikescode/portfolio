import { createGlobalStyle } from 'styled-components'
import { Theme } from '../utils/theme'

export const Global = createGlobalStyle<{ theme: Theme }>`

  *:focus {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }
`
