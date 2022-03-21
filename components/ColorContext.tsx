import { createContext, ReactNode } from 'react'
import { useColorTheme } from '../utils/hooks'
import { blueTheme } from '../utils/theme'

type state = {
  colorName: string;
  colorTheme: Object;
  setMode: (mode: string) => void;
}

const state: state = {
  colorName: '',
  colorTheme: blueTheme,
  setMode: () => null
}

const colorStore = createContext(state)
const { Provider } = colorStore

const ColorProvider = ({ children }: { children: ReactNode }) => {
  const { colorName, colorTheme, setMode } = useColorTheme()

  return (
    <Provider
      value={{
        colorName,
        colorTheme,
        setMode
      }}
    >
      {children}
    </Provider>
  )
}

export { colorStore, ColorProvider, Provider }