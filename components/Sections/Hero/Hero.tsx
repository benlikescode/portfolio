import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { StyledHero } from '.'
import { Icon } from '../../Icon'
import Link from 'next/link'

const Hero: FC = () => {
  return (
    <StyledHero>
      <section className="heroContent">
        <h2 className="greetingTitle">Hi, I&apos;m Ben!</h2>
        <h1 className="ctaTitle">I Build Things For The Web.</h1>
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
