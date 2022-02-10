import styled from 'styled-components'

const StyledHero = styled.div`
  height: calc(100vh - 68px - 250px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  .heroContent {
    max-width: ${({ theme }) => theme.breakpoint.l};
    width: 100%;
    display: grid;
    gap: 1rem;
  }

  .ctaBtn {
    display: block;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 5px;
    height: 42px;
    padding: 0 25px;
    font-size: 1rem;
    font-weight: 500;
    width: fit-content;
    user-select: none;
    background-color: #048067;
  }

  .ctaTitle {
    margin-bottom: 2rem;
  }

  .header {
    display: block;
    font-size: 8rem;
    color: var(--color1);
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
      font-size: 7rem;
    }

    @media (max-width: 700px) {
      font-size: 6rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 4rem;
    }
  }

  .subHeader {
    display: block;
    font-size: 6rem;
    color: var(--color2);
    font-weight: 500;
    margin-top: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.l}) {
      font-size: 5.3rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
      font-size: 4rem;
    }

    @media (max-width: 700px) {
      font-size: 3.2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 2rem;
    }
  }
  
`

export default StyledHero
