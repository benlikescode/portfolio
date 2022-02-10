import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { StyledHero } from '.'
import { Icon } from '../../Icon'
import Link from 'next/link'

const Hero: FC = () => {
  return (
    <StyledHero>
      <section className="heroContent">
        <h1 className="ctaTitle">
          <span className="header">Ben Hoeg</span>
          <span className="subHeader">Software Developer</span>
        </h1>
      
        <Link href="/#projects">  
          <a className="ctaBtn">
            <span>Check Out My Projects</span>
            <Icon size={24} fill="#fff">
              <ArrowNarrowRightIcon />
            </Icon>
          </a>      
        </Link>     
      </section>
    </StyledHero>
  )
}

export default Hero
