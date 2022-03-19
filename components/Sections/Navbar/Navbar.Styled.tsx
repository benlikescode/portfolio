import styled from 'styled-components'

const StyledNavbar = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in;
  padding: 0 1.25rem;
  font-weight: 500;
  color: #ddd;
  
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

    @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
      gap: 20px;
    }  

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      display: none;
    }

    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      li {
        &:not(:last-child) {
          margin-right: 30px;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
        li {
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      } 
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
    border: 2px solid #888aff;
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
