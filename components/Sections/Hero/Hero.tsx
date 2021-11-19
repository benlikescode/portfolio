import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { StyledHero } from '.'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import Link from 'next/link'

const Hero: FC = () => {
  return (
    <StyledHero>
      <section className="heroContent">
        <h2 className="greetingTitle">Hi, I'm Ben!</h2>
        <h1 className="ctaTitle">I Build Things For The Web.</h1>
        <Link href="/#projects">
          <a>
            <Button type="solid">
              <span>Check Out My Projects</span>
              <Icon size={24} fill="#fff">
                <ArrowNarrowRightIcon />
              </Icon>
            </Button>
          </a>     
        </Link>     
      </section>
    </StyledHero>
  )
}

export default Hero
