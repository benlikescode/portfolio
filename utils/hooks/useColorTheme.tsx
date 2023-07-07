import { useEffect, useState } from 'react'
import { blueTheme, greenTheme, purpleTheme, redTheme, tealTheme } from '../theme/color'

export const THEMES = [blueTheme, redTheme, purpleTheme, greenTheme, tealTheme]

const useColorTheme = () => {
  const [colorTheme, setColorTheme] = useState(blueTheme)
  const [colorIdx, setColorIdx] = useState(0)

  const setMode = (colorIdx: number) => {
    console.log(colorIdx)
    window.localStorage.setItem('theme', colorIdx.toString())
    setColorTheme(THEMES[colorIdx])
    setColorIdx(colorIdx)
  }

  useEffect(() => {
    const localTheme = Number(window.localStorage.getItem('theme'))
    localTheme && setColorTheme(THEMES[localTheme])
    localTheme && setColorIdx(localTheme)
  }, [])

  return { colorTheme, setMode, colorIdx }
}

export default useColorTheme
