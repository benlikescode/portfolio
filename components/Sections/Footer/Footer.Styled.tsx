import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: #0f070e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  footer {
    max-width: ${({ theme }) => theme.breakpoint.l};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem 0;
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 23px;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      gap: 1rem;
    }
  }

  .footerText {
    font-size: 1rem;
    color: var(--color2);

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 0.8rem;
    }
  }

  .socialItem a {
    height: 20px;
    width: 20px;
  }
`

export default StyledFooter
