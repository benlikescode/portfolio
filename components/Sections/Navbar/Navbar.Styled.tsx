import styled from 'styled-components'

type StyledProps = {
  atTop?: boolean;
}

const StyledNavbar = styled.div<StyledProps>`
  height: 68px;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.elevation.sticky};
  font-family: var(--fontFamily2);
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in;
  padding: 0 2rem;
  
  ${({ atTop }) => !atTop && `
    background-color: #361532;
    opacity: 0.98;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.55);
  `}

  .logo {
    font-size: 1.7rem;
    font-weight: 400;
    color: #afa0ff;  
  }

  header {
    max-width: ${({ theme }) => theme.breakpoint.l};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .linksWrapper {
    display: flex;
    align-items: center;
    gap: 30px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
      gap: 20px;
    }  

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      display: none;
    }
  }

  .navLink {
    padding: 0.5rem;
    border-radius: 1rem;
  }

  .avatarWrapper {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid #a8207b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    height: 32px;
    width: 32px;
    position: relative;
 
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }
  }
`

export default StyledNavbar
