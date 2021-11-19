import styled from "styled-components"

type StyledProps = {
  menuOpen?: boolean
}

const StyledSidebar = styled.aside<StyledProps>`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--background2);
    box-shadow: -10px 0px 30px -15px var(--background3);
    z-index: 9;
    visibility: ${({ menuOpen }) => menuOpen ? 'visible' : 'hidden'};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    width: 100%;
    height: 100%;
    flex-direction: column;
    color: var(--color1);
    text-align: center;
  }

  ul {
    margin-top: 5rem;
    display: grid;
    gap: 2rem;
    width: 100%;

    li {
      font-size: 1.5rem;
      width: 100%;
    }

    a {
      width: 100%;
    }
  }
  
`

export default StyledSidebar
