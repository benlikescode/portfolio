import '../fonts/index.css'
import { FC, useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'
import { MetaHead } from '../components/MetaHead'
import { ColorProvider, colorStore } from '../context/ColorContext'
import { Global } from '../styles/globals'
import { theme } from '../utils/theme'
import { darkMode, lightMode } from '../utils/theme/color'

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
  const { colorTheme, appTheme } = useContext(colorStore)

  return (
    <>
      <MetaHead />
      <ThemeProvider
        theme={{
          ...theme,
          color: appTheme === 'dark' ? { ...darkMode, mode: colorTheme } : { ...lightMode, mode: colorTheme },
        }}
      >
        <Global />
        <Component {...pageProps} />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: theme.color.bg[600],
              color: theme.color.text[200],
            },
            position: 'bottom-center',
          }}
        />
      </ThemeProvider>
    </>
  )
}
