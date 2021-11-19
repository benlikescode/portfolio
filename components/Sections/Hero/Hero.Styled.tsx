import styled from 'styled-components'

const StyledHero = styled.div`
  height: calc(100vh - 68px - 250px);
  display: flex;
  align-items: center;
  justify-content: center;

  .heroContent {
    max-width: ${({ theme }) => `${theme.breakpoint.l}px`};
    width: 100%;
    display: grid;
    gap: 1rem;
  }

  .greetingTitle {
    font-size: 3.8rem;
    color: var(--color1);
    font-weight: 400;
  }

  .ctaTitle {
    font-size: 5.3rem;
    color: var(--color2);
    font-weight: 400;
    margin-bottom: 2rem;
  }
  
`

export default StyledHero
