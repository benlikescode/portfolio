import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { breakpoint, elevation } from '../utils/theme'
import { FC, useContext } from 'react'
import { ColorProvider, colorStore } from '../components/ColorContext'
import { Global } from '../styles/globals'

const appContainer = ({ ...rest }: AppProps) => {
  return (
    <ColorProvider>
      <App {...rest}/>
    </ColorProvider>
  )
}

export default appContainer

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { colorTheme } = useContext(colorStore)

  const theme = {
    color: colorTheme, 
    breakpoint,
    elevation
  }

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}