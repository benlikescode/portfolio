import { useEffect, useState } from 'react'
import { blueTheme, greenTheme, purpleTheme, redTheme, tealTheme } from '../theme/color'

export const THEMES = [blueTheme, redTheme, purpleTheme, greenTheme, tealTheme]

export type ModeType = 'light' | 'dark'

const useColorTheme = () => {
  const [theme, setTheme] = useState(blueTheme)
  const [themeIdx, setThemeIdx] = useState(0)
  const [mode, setMode] = useState<ModeType>('dark')

  const handleSetTheme = (themeIdx: number) => {
    setTheme(THEMES[themeIdx])
    setThemeIdx(themeIdx)
    window.localStorage.setItem('theme', themeIdx.toString())
  }

  const handleSetMode = (mode: ModeType) => {
    setMode(mode)
    window.localStorage.setItem('mode', mode)
  }

  useEffect(() => {
    const savedThemeIdx = Number(window.localStorage.getItem('theme'))
    const savedMode = window.localStorage.getItem('mode') as ModeType

    savedThemeIdx && setTheme(THEMES[savedThemeIdx])
    savedThemeIdx && setThemeIdx(savedThemeIdx)

    savedMode && setMode(savedMode)
  }, [])

  return { theme, themeIdx, mode, handleSetTheme, handleSetMode }
}

export default useColorTheme
