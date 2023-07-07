import '../styles/globals.css'
import { FC, useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'
import { MetaHead } from '../components/MetaHead'
import { ColorProvider, colorStore } from '../context/ColorContext'
import { Global } from '../styles/globals'
import { breakpoint } from '../utils/theme/breakpoint'
import { elevation } from '../utils/theme/elevation'

import type { AppProps } from 'next/app'
const appContainer = ({ ...rest }: AppProps) => {
  return (
    <ColorProvider>
      <App {...rest} />
    </ColorProvider>
  )
}

export default appContainer

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { colorTheme } = useContext(colorStore)

  const theme = {
    color: colorTheme,
    breakpoint,
    elevation,
  }

  return (
    <>
      <MetaHead />
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#121212',
              color: '#b6b6b6',
            },
            position: 'bottom-center',
          }}
        />
      </ThemeProvider>
    </>
  )
}
