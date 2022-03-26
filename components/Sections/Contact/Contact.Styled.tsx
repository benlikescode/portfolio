import styled from 'styled-components'

const StyledContact = styled.div`
  background-color: #090909;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  border-top: 1px solid #202020;

  .contactSection {
    max-width: 1160px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    gap: 3rem;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 4rem;
    }
  }

  .contactForm {
    width: 550px;
    display: grid;
    gap: 1.5rem;
    margin-top: 1.5rem;

    @media (max-width: 900px) {
      width: 350px;
    }

    @media (max-width: 600px) {
      width: 100%;
      margin-top: 0;
    }
  }

  .topInputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  h2 {
    font-size: 3rem;
    font-family: var(--headerFont);
    font-weight: 600;

    @media (max-width: 600px) {
      font-size: 2.25rem;
    }
  }

  .contactText {
    color: #9b9b9b;
    font-size: 22px;
    max-width: 450px;
    margin-top: 1rem;
    
    @media (max-width: 800px) {
      font-size: 18px;
    }
  }

  .contactInfoWrapper {
    display: grid;
    gap: 1.5rem;
    margin-top: 4rem;

    @media (max-width: 600px) {
      margin-top: 2rem;
    }
  }

  .contactItem {
    display: flex;
    align-items: center;
  }

  .contactIcon {
    height: 40px;
    width: 40px;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
`

export default StyledContact
