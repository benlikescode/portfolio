import { FC, useEffect, useState } from 'react'
import { StyledNavbar } from '.'
import { useScrollDirection } from '../../../utils/hooks'
import { Menu } from '../../Menu'
import Link from 'next/link'

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
            <Link href="/#about">
              <a>
                <li>About Me</li>
              </a>          
            </Link>

            <Link href="/#projects">
              <a >
                <li>My Projects</li>
              </a>          
            </Link>

            <Link href="/#contact">
              <a>
                <li>Contact Me</li>
              </a>          
            </Link>
          </ul>

          <Menu />
        </nav>
        
      </header>
      
     
    </StyledNavbar>
  )
}

export default Navbar
