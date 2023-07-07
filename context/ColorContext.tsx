import { createContext, ReactNode } from 'react'
import { useColorTheme } from '../utils/hooks'
import { blueTheme } from '../utils/theme/color'

type state = {
  colorIdx: number
  colorTheme: Object
  setMode: (mode: number) => void
}

const state: state = {
  colorIdx: 0,
  colorTheme: blueTheme,
  setMode: () => null,
}

const colorStore = createContext(state)
const { Provider } = colorStore

const ColorProvider = ({ children }: { children: ReactNode }) => {
  const { colorIdx, colorTheme, setMode } = useColorTheme()

  return (
    <Provider
      value={{
        colorIdx,
        colorTheme,
        setMode,
      }}
    >
      {children}
    </Provider>
  )
}

export { colorStore, ColorProvider, Provider }
