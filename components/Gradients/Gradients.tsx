import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  color?: string;
}

const StyledHeroGradient = styled.div<Props>`
  width: 100%;
  height: 960px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  background: ${({ color }) => `radial-gradient(53.09% 53.09% at 50% 37.57%, ${color ? color : 'rgba(59, 37, 160, 0.4)'} 0%, rgba(18, 19, 24, 0) 100%)`};
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
  background: radial-gradient(50% 50% at 50% 50%,rgb(27 0 111 / 15%) 0%,rgba(0,0,0,0) 100%);
`

export const HeroGradient: FC<Props> = ({ color }) => {
  return <StyledHeroGradient color={color} />
}

export const MiddleGradient: FC = () => {
  return <StyledMiddleGradient />
}

export const FooterGradient: FC = () => {
  return <StyledFooterGradient />
}