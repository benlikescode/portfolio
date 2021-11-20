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
            </ul>  
          </nav>
        </StyledSidebar>
      </div>
      
    </StyledMenu>
  )
}

export default Menu
