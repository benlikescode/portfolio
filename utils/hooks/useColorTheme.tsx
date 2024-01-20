import { useEffect, useState } from 'react'
import { blueTheme, darkMode, greenTheme, lightMode, purpleTheme, redTheme, tealTheme } from '../theme/color'

export const THEMES = [blueTheme, redTheme, purpleTheme, greenTheme, tealTheme]

type AppTheme = 'light' | 'dark'

const useColorTheme = () => {
  const [colorTheme, setColorTheme] = useState(blueTheme)
  const [colorIdx, setColorIdx] = useState(0)
  const [appTheme, setAppTheme] = useState<AppTheme>('dark')

  const setMode = (colorIdx: number) => {
    console.log(colorIdx)
    window.localStorage.setItem('theme', colorIdx.toString())
    setColorTheme(THEMES[colorIdx])
    setColorIdx(colorIdx)
  }

  const setAppMode = (mode: 'light' | 'dark') => {
    window.localStorage.setItem('app-theme', mode)
    setAppTheme(mode)
  }

  useEffect(() => {
    const localTheme = Number(window.localStorage.getItem('theme'))
    const localAppTheme = window.localStorage.getItem('app-theme') as AppTheme

    localTheme && setColorTheme(THEMES[localTheme])
    localTheme && setColorIdx(localTheme)

    localAppTheme && setAppTheme(localAppTheme)
  }, [])

  return { colorTheme, setMode, setAppMode, colorIdx, appTheme }
}

export default useColorTheme
