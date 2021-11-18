import { FC } from 'react'
import { StyledNavbar } from '.'
import { Icon } from '../../Icon'
import { SunIcon } from '@heroicons/react/solid'
import { Button } from '../../Button'

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <header>
        <h3 className="logo">Ben Hoeg</h3>

        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">My Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <Button type="icon">
                <Icon size={24} fill="#CFC358">
                  <SunIcon />
                </Icon>
              </Button>          
            </li>
          </ul>
        </nav>
      </header>
      
     
    </StyledNavbar>
  )
}

export default Navbar
