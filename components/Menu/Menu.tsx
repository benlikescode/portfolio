import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { FC, useRef, useState } from 'react'
import { StyledMenu } from '.'
import { Button } from '../Button'
import { Icon } from '../Icon'
import StyledSidebar from './Sidebar.Styled'
import Link from 'next/link'
import useOnClickOutside from '../../utils/hooks/useClickOutside'

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const wrapperRef = useRef(null)
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))

  return (
    <StyledMenu menuOpen={menuOpen}>
      <div className="menuWrapper" ref={wrapperRef}>
        <Button type="icon" callback={() => toggleMenu()} className="hamburgerBtn">
          <Icon size={24} fill="#fff">
            {menuOpen ? <XIcon /> : <MenuIcon />}         
          </Icon>
        </Button>

        <StyledSidebar menuOpen={menuOpen}>
          <nav>
            <ul>
              <Link href="/#about">
                <a onClick={() => setMenuOpen(false)}>
                  <li>About Me</li>
                </a>          
              </Link>

              <Link href="/#projects">
                <a onClick={() => setMenuOpen(false)}>
                  <li>My Projects</li>
                </a>          
              </Link>

              <Link href="/#contact">
                <a onClick={() => setMenuOpen(false)}>
                  <li>Contact Me</li>
                </a>          
              </Link>
            </ul>  
          </nav>
        </StyledSidebar>
      </div>
      
    </StyledMenu>
  )
}

export default Menu
