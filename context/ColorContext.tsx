import { createContext, ReactNode } from 'react'
import { useColorTheme } from '../utils/hooks'
import { blueTheme } from '../utils/theme/color'
import { ModeType } from '../utils/hooks/useColorTheme'

type state = {
  theme: typeof blueTheme
  themeIdx: number
  mode: ModeType
  setTheme: (themeIdx: number) => void
  setMode: (mode: ModeType) => void
}

const initialState: state = {
  theme: blueTheme,
  themeIdx: 0,
  mode: 'dark',
  setTheme: () => null,
  setMode: () => null,
}

const colorStore = createContext(initialState)
const { Provider } = colorStore

const ColorProvider = ({ children }: { children: ReactNode }) => {
  const { theme, themeIdx, mode, handleSetTheme, handleSetMode } = useColorTheme()

  return (
    <Provider
      value={{
        theme,
        themeIdx,
        mode,
        setTheme: handleSetTheme,
        setMode: handleSetMode,
      }}
    >
      {children}
    </Provider>
  )
}

export { colorStore, ColorProvider, Provider }
