import styled from 'styled-components'

type StyledProps = {
  menuOpen?: boolean
}

const StyledMenu = styled.div<StyledProps>`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }

  .hamburgerBtn {
    z-index: 10;
  }

  .themeSelector {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .colorOption {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.15);

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`

export default StyledMenu
