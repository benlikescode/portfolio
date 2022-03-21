import { FC, useState } from 'react'
import { StyledNavbar } from '.'
import { Menu } from '../../Menu'
import Link from 'next/link'
import { Select } from '../../Select'

const Navbar: FC = () => {
  const THEME_OPTIONS = ['Blue', 'Red', 'Purple', 'Green', 'Teal']

  return (
    <StyledNavbar>
      <header>
        <Link href="/">
          <a>
            <div className="avatarWrapper">
              <div className="avatar">
                <img src="favicon.ico" alt="Ben Hoeg" />
              </div> 
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

            <li>
              <Select options={THEME_OPTIONS} />
            </li>    
          </ul>

          <Menu />
        </nav>     
      </header>    
    </StyledNavbar>
  )
}

export default Navbar
