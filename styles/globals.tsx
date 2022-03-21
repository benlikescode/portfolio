import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle<{theme: any}>`

  *:focus {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 3px;
  }
`