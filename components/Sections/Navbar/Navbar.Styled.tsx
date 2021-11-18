import styled from 'styled-components'

const StyledNavbar = styled.div`
  border-bottom: 1px solid var(--borderColor);
  height: 68px;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.elevation.sticky};
  font-family: var(--fontFamily2);
  display: flex;
  justify-content: center;
  background-color: var(--background1);

  .logo {
    font-size: 1.7rem;
    font-weight: 400;
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
