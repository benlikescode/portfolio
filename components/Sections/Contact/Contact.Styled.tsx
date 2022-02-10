import styled from 'styled-components'

const StyledContact = styled.div`
  background-color: #0d040c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  .contactSection {
    max-width: ${({ theme }) => theme.breakpoint.l};
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      flex-direction: column;
      gap: 4rem;
    }
  }

  .contactForm {
    width: 500px;
    display: grid;
    gap: 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
      width: 350px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      width: 100%;
    }
  }

  .topInputs {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 1.6rem;
    }
  }

  .contactText {
    color: var(--color3);
    font-size: 26px;
    max-width: 450px;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 18px;
    }
  }

  .contactInfoWrapper {
    display: grid;
    gap: 1.5rem;
    margin-top: 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      margin-top: 2rem;
    }
  }

  .contactItem {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .contactIcon {
    height: 40px;
    width: 40px;
    background-color: #052d25;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default StyledContact
