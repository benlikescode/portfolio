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
            <li>
              <Link href="/#about">
                <a>About Me</a>          
              </Link>
            </li>

            <li>
              <Link href="/#projects">
                <a>My Projects</a>          
              </Link>
            </li>

            <li>
              <Link href="/#contact">
                <a>Contact Me</a>          
              </Link>
            </li>       
          </ul>

          <Menu />
        </nav>
        
      </header>
      
     
    </StyledNavbar>
  )
}

export default Navbar
