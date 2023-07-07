import { useRouter } from 'next/router'
import { FC } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Button } from '../../Button'
import { HeroGradient } from '../../HeroGradient'
import { StyledHero } from './'

const Hero: FC = () => {
  const handleScroll = () => {
    window.scrollBy(0, window.innerHeight)
  }

  const router = useRouter()

  return (
    <StyledHero>
      <HeroGradient />

      <section className="hero-content">
        <h1 className="cta-title">Ben Hoeg</h1>
      </section>

      <Button buttonType="ghost" onClick={() => router.push('#projects')} className="down-indicator">
        <ChevronDownIcon />
        <ChevronDownIcon />
      </Button>
    </StyledHero>
  )
}

export default Hero
