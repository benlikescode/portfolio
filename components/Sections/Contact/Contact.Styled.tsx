import styled from 'styled-components'

const StyledContact = styled.div`
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  border-top: 1px solid #181818;

  .contact-section {
    max-width: var(--maxWidth);
    width: 100%;
    padding: 4rem 0;
    gap: 3rem;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 4rem;
    }

    h2 {
      font-size: 24px;
      font-family: var(--headerFont);
      font-weight: 600;
    }

    .contact-form {
      display: grid;
      gap: 1.5rem;
      margin-top: 2rem;
      max-width: 550px;
      width: 100%;

      .top-inputs-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        @media (max-width: 600px) {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
      }
    }
  }
`

export default StyledContact
