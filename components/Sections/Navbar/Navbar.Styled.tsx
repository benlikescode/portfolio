import styled from 'styled-components'

type StyledProps = {
  atTop?: boolean;
  scrollDirection: 'up' | 'down';
}

const StyledNavbar = styled.div<StyledProps>`
  border-bottom: 1px solid var(--borderColor);
  height: 68px;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.elevation.sticky};
  font-family: var(--fontFamily2);
  display: flex;
  justify-content: center;
  background-color: var(--background1);
  transition: 0.2s ease-in;

  ${({ scrollDirection, atTop }) => scrollDirection === 'up' && !atTop && `
    transform: translateY(0px);
    background-color: var(--background1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `}

  ${({ scrollDirection, atTop }) => scrollDirection === 'down' && !atTop && `
    transform: translateY(-68px);
  `}

  .logo {
    font-size: 1.7rem;
    font-weight: 400;
    color: #afa0ff;  
  }

  header {
    max-width: ${({ theme }) => `${theme.breakpoint.l}px`};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
    font-weight: 400;
  }
`

export default StyledNavbar
