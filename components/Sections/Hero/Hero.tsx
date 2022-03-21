import { ArrowNarrowRightIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { StyledHero } from '.'
import { Icon } from '../../Icon'
import Link from 'next/link'
import { HeroGradient } from '../../Gradients'
import { Button } from '../../Button'

const Hero: FC = () => {

  const handleScroll = () => {
    window.scrollBy(0, window.innerHeight)
  }

  return (
    <StyledHero>
      <HeroGradient />

      <section className="heroContent">
        <h1 className="ctaTitle">
          <span className="header">Ben Hoeg</span>
          <span className="subHeader">Software Developer</span>
        </h1>   
      </section>

      <Button buttonType="ghost" onClick={() => handleScroll()} className="downIndicator">
        <ChevronDownIcon/>
        <ChevronDownIcon/>
      </Button>
    </StyledHero>
  )
}

export default Hero
