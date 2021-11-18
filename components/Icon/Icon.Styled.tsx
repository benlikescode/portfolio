import styled from 'styled-components'

type StyledProps = {
  size: number
  fill?: string
  hoverColor?: string
}

const StyledIcon = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    height: ${({ size }) => size ? size : '24'}px;
    width: ${({ size }) => size ? size : '24'}px;
    color: ${({ fill }) => fill ? fill : 'var(--color3)'};
    
    path {
      stroke-width: 1.5;
    }

    :hover {
      color: ${({ hoverColor }) => hoverColor};
      transition: color .2s ease-in-out;
    }
  }
`

export default StyledIcon