import { useEffect, useState } from 'react'
import { blueTheme, redTheme, purpleTheme, greenTheme, tealTheme } from '../theme'

const useColorTheme = () => {
    const [colorTheme, setColorTheme] = useState(blueTheme)
    const [colorName, setColorName] = useState('Blue')

    const updateTheme = (mode: string) => {
      switch (mode) {
        case 'Blue':
          setColorTheme({...blueTheme})
          break
        case 'Red':
          setColorTheme({...redTheme})
          break
        case 'Purple':
          setColorTheme({...purpleTheme})
          break
        case 'Green':
          setColorTheme({...greenTheme})
          break
        case 'Teal':
          setColorTheme({...tealTheme})
          break
        default:
          setColorTheme({...blueTheme})
      }
    }

    const setMode = (mode: string) => {
      console.log(mode)
      window.localStorage.setItem('theme', mode)
      updateTheme(mode)
      setColorName(mode)
    }

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme')
      localTheme && updateTheme(localTheme)
      localTheme && setColorName(localTheme)
    }, [])

    return { colorTheme, setMode, colorName }
}

export default useColorTheme