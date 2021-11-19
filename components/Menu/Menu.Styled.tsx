import styled from 'styled-components'

type StyledProps = {
  menuOpen?: boolean
}

const StyledMenu = styled.div<StyledProps>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    display: block;
  }

  .hamburgerBtn {
    z-index: 10;
  }
`

export default StyledMenu
