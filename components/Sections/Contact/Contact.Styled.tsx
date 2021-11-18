import styled from 'styled-components'

const StyledContact = styled.div`
  background-color: var(--background2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  .contactSection {
    max-width: ${({ theme }) => `${theme.breakpoint.l}px`};
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .contactForm {
    width: 500px;
    display: grid;
    gap: 1.5rem;
  }

  .topInputs {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  h3 {
    font-size: 1.8rem;
  }

  .contactText {
    color: var(--color3);
    font-size: 26px;
    max-width: 450px;
  }

  .contactInfoWrapper {
    display: grid;
    gap: 1.5rem;
    margin-top: 4rem;
  }

  .contactItem {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .contactIcon {
    height: 40px;
    width: 40px;
    background-color: var(--darkPurple);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`

export default StyledContact
