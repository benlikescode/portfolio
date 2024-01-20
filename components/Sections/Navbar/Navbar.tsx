import Link from 'next/link'
import { FC, useContext } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { colorStore } from '../../../context/ColorContext'
import { THEMES } from '../../../utils/hooks/useColorTheme'
import { StyledNavbar } from './'

const Navbar: FC = () => {
  const { setMode, colorIdx, setAppMode, appTheme } = useContext(colorStore)

  const changeColorTheme = () => {
    setMode(colorIdx + 1 >= THEMES.length ? 0 : colorIdx + 1)
  }

  const changeTheme = () => {
    setAppMode(appTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <StyledNavbar>
      <header>
        <div className="header-group">
          <Link href="/">
            <a>
              <div className="avatar-wrapper">
                <div className="avatar">
                  <img src="favicon.ico" alt="Ben Hoeg" />
                </div>
              </div>
            </a>
          </Link>

          <nav>
            <ul className="links-wrapper">
              <li>
                <Link href="#about">
                  <a className="nav-link">About</a>
                </Link>
              </li>

              <li>
                <Link href="#projects">
                  <a className="nav-link">Projects</a>
                </Link>
              </li>

              <li>
                <Link href="#contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="theme-buttons">
          <button className="theme-switcher" onClick={() => changeColorTheme()}>
            <div className="current-theme"></div>
          </button>
          <button className="theme-switcher" onClick={() => changeTheme()}>
            {appTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>
    </StyledNavbar>
  )
}

export default Navbar
