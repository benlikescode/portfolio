import styled from 'styled-components'

const StyledHero = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;

  .heroContent {
    max-width: ${({ theme }) => theme.breakpoint.l};
    width: 100%;
    display: grid;
    gap: 1rem;
    margin-top: -8rem;
  }

  .ctaBtn {
    display: block;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 42px;
    padding: 0 25px;
    font-size: 1rem;
    font-weight: 500;
    width: fit-content;
    user-select: none;
    background-color: #0070f3;

    span {
      margin-right: 8px;
    }
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
      font-size: 4.2rem;
    }
  }

  .subHeader {
    display: block;
    font-size: 6rem;
    color: #9296b5;
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
      font-size: 2.2rem;
    }
  }
  
`

export default StyledHero
