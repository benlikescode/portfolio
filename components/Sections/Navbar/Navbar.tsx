import Link from 'next/link'
import { FC, useContext } from 'react'
import { colorStore } from '../../../context/ColorContext'
import { THEMES } from '../../../utils/hooks/useColorTheme'
import { StyledNavbar } from './'

const Navbar: FC = () => {
  const { colorTheme, setMode, colorIdx } = useContext(colorStore)

  const handleChangeTheme = () => {
    setMode(colorIdx + 1 >= THEMES.length ? 0 : colorIdx + 1)
  }

  return (
    <StyledNavbar>
      <header>
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

            <li>
              <button className="theme-switcher" onClick={() => handleChangeTheme()}>
                <div className="current-theme"></div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </StyledNavbar>
  )
}

export default Navbar
