import { FC, useEffect, useState } from 'react'
import { StyledNavbar } from '.'
import { Icon } from '../../Icon'
import { SunIcon } from '@heroicons/react/solid'
import { Button } from '../../Button'
import { useScrollDirection } from '../../../utils/hooks'
import { Menu } from '../../Menu'

const Navbar: FC = () => {
  const [atTop, setAtTop] = useState(true)
  const scrollDirection = useScrollDirection('down')

  const handleScroll = () => {
    setAtTop(window.scrollY < 68)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <StyledNavbar atTop={atTop} scrollDirection={scrollDirection}>
      <header>
        <h2 className="logo">Ben Hoeg</h2>

        <nav>
          <ul className="linksWrapper">
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

          <Menu />
        </nav>
        
      </header>
      
     
    </StyledNavbar>
  )
}

export default Navbar
