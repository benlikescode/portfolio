import { createRef, FC, useEffect } from 'react'
import { StyledHeroGradient } from './'

const HeroGradient: FC = () => {
  const gradientRef = createRef<HTMLDivElement>()

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [gradientRef])

  const handleMouseMove = (e: MouseEvent) => {
    if (!gradientRef || !gradientRef.current || e.pageY > window.innerHeight) {
      return
    }

    const x = e.pageX
    const y = e.pageY
    const gradient = gradientRef.current
    const grWidth = gradient.clientWidth
    const grHeight = gradient.clientHeight

    const grX = x - grWidth / 2
    const grY = y - grHeight / 2

    gradient.style.top = `${grY}px`
    gradient.style.left = `${grX}px`
  }

  return <StyledHeroGradient ref={gradientRef} />
}

export default HeroGradient
