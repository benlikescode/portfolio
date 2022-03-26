import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { FC, useContext, useRef, useState } from 'react'
import { StyledMenu } from '.'
import { Button } from '../Button'
import { Icon } from '../Icon'
import StyledSidebar from './Sidebar.Styled'
import Link from 'next/link'
import useOnClickOutside from '../../utils/hooks/useClickOutside'
import { blueTheme, greenTheme, purpleTheme, redTheme, tealTheme } from '../../utils/theme'
import { colorStore } from '../ColorContext'

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const wrapperRef = useRef(null)
  const { colorTheme, setMode, colorName } = useContext(colorStore)
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))

  const handleColorChange = (colorName: string) => {
    setMode(colorName)
    setMenuOpen(false)
  }

  return (
    <StyledMenu menuOpen={menuOpen}>
      <div className="menuWrapper" ref={wrapperRef}>
        <Button buttonType="icon" onClick={() => toggleMenu()} className="hamburgerBtn">
          <Icon size={30} fill="#fff">
            {menuOpen ? <XIcon /> : <MenuIcon />}         
          </Icon>
        </Button>

        <StyledSidebar menuOpen={menuOpen}>
          <nav>
            <ul>           
              <li>
                <Link href="/#about">
                  <a onClick={() => setMenuOpen(false)}>About Me</a>          
                </Link>
              </li>

              <li>
                <Link href="/#projects">
                  <a onClick={() => setMenuOpen(false)}>My Projects</a>          
                </Link>
              </li>

              <li>
                <Link href="/#contact">
                  <a onClick={() => setMenuOpen(false)}>Contact Me</a>          
                </Link>
              </li>  

              <li>
                <div className="themeSelector">
                  <button className="colorOption" onClick={() => handleColorChange('Blue')} style={{backgroundColor: blueTheme.primary}}></button>
                  <button className="colorOption" onClick={() => handleColorChange('Red')} style={{backgroundColor: redTheme.primary}}></button>
                  <button className="colorOption" onClick={() => handleColorChange('Purple')} style={{backgroundColor: purpleTheme.primary}}></button>
                  <button className="colorOption" onClick={() => handleColorChange('Green')} style={{backgroundColor: greenTheme.primary}}></button>
                  <button className="colorOption" onClick={() => handleColorChange('Teal')} style={{backgroundColor: tealTheme.primary}}></button>
                </div>
              </li>
            </ul>  
          </nav>
        </StyledSidebar>
      </div>
      
    </StyledMenu>
  )
}

export default Menu
