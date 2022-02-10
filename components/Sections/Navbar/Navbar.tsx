import { FC, useEffect, useState } from 'react'
import { StyledNavbar } from '.'
import { useScrollDirection } from '../../../utils/hooks'
import { Menu } from '../../Menu'
import Link from 'next/link'
import Image from 'next/image'

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
    <StyledNavbar atTop={atTop}>
      <header>
        <Link href="/">
          <a className="avatarWrapper">
            <div className="avatar">
              <img src="favicon.ico" alt="Ben Hoeg" />
            </div>  
          </a>
        </Link>

        <nav>
          <ul className="linksWrapper">
            <li>
              <Link href="/#about">
                <a className="navLink">About Me</a>          
              </Link>
            </li>

            <li>
              <Link href="/#projects">
                <a className="navLink">My Projects</a>          
              </Link>
            </li>

            <li>
              <Link href="/#contact">
                <a className="navLink">Contact Me</a>          
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
