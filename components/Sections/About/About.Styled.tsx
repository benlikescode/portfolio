import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  .about {
    max-width: ${({ theme }) => theme.breakpoint.l};
    width: 100%;
    padding: 5rem 0;
  }

  .skillRow {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 1.4rem;
    }
  }

  h2 {
    font-size: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 1.6rem;
    }
  }

  h3 { 
    font-size: 20px;
    font-weight: 500;
    color: #D0D0D0;
  }

  .aboutText {
    color: var(--color3);
    font-size: 26px;
    line-height: 40px;
    max-width: 80%;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .skillsWrapper {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
  }
  
`

export default StyledAbout
