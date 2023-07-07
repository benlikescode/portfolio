import styled from 'styled-components'

type StyledProps = {}

const StyledHeroGradient = styled.div<StyledProps>`
  width: 90vw;
  height: 90vw;
  position: absolute;
  top: -1900;
  left: -1900;
  pointer-events: none;
  background: ${({ theme }) => `radial-gradient(circle closest-side, ${theme.color.gradient}, rgba(0, 0, 0, 0))`};
`

export default StyledHeroGradient
