import { createContext, ReactNode } from 'react'
import { useColorTheme } from '../utils/hooks'
import { blueTheme } from '../utils/theme/color'

type state = {
  colorIdx: number
  colorTheme: typeof blueTheme
  setMode: (mode: number) => void
  setAppMode: (mode: 'light' | 'dark') => void
  appTheme: 'light' | 'dark'
}

const initialState: state = {
  colorIdx: 0,
  colorTheme: blueTheme,
  setMode: () => null,
  setAppMode: () => null,
  appTheme: 'dark',
}

const colorStore = createContext(initialState)
const { Provider } = colorStore

const ColorProvider = ({ children }: { children: ReactNode }) => {
  const { colorIdx, colorTheme, setMode, setAppMode, appTheme } = useColorTheme()

  return (
    <Provider
      value={{
        colorIdx,
        colorTheme,
        setMode,
        setAppMode,
        appTheme,
      }}
    >
      {children}
    </Provider>
  )
}

export { colorStore, ColorProvider, Provider }
