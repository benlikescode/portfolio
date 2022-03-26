import React, { createRef, FC, useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {
  color?: string;
}

const StyledHeroGradient = styled.div<Props>`
  width: 90vw;
  height: 90vw;
  position: absolute;
  top: -1900;
  left: -1900;
  pointer-events: none;
  background: ${({ theme }) => `radial-gradient(circle closest-side, ${theme.color.gradient}, rgba(18, 19, 24, 0))`};
`

const StyledMiddleGradient = styled.div`
  width: 100%;
  height: 600px;
  position: absolute;
  top: 165vh;
  left: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #ffa13616 45.31%, rgba(19, 19, 19, 0) 100%);
`

const StyledFooterGradient = styled.div`
  width: 100%;
  height: 800px;
  position: absolute;
  bottom: 0;
  left: -300px;
  pointer-events: none;
  background: radial-gradient(50% 50% at 50% 50%, rgb(27 0 111 / 15%) 0%, rgba(0, 0, 0, 0) 100%);
`

export const HeroGradient: FC<Props> = ({ color }) => {
  const gradientRef = createRef<HTMLDivElement>()

  const handleMouseMove = (e: MouseEvent) => {
    if (!gradientRef || !gradientRef.current || e.pageY > window.innerHeight) {
      return
    }

    const x = e.pageX
    const y = e.pageY
    const gradient = gradientRef.current
    const grWidth = gradient.clientWidth
    const grHeight = gradient.clientHeight

    const grX = x - (grWidth / 2)
    const grY = y - (grHeight / 2)

    setTimeout(() => {
      gradient.style.top = `${grY}px`
      gradient.style.left = `${grX}px`
    }, 200)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [gradientRef])
  

  return <StyledHeroGradient color={color} ref={gradientRef}/>
}

export const MiddleGradient: FC = () => {
  return <StyledMiddleGradient />
}

export const FooterGradient: FC = () => {
  return <StyledFooterGradient />
}