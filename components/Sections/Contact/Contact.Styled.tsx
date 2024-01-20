import styled from 'styled-components'

const StyledContact = styled.div`
  background-color: ${({ theme }) => theme.color.bg[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.color.border};

  .contact-section {
    max-width: ${({ theme }) => theme.breakpoint.maxWidth};
    width: 100%;
    padding: 4rem 0;
    gap: 3rem;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 4rem;
    }

    h2 {
      font-size: 24px;
      font-family: ${({ theme }) => theme.typeface.graphik};
      font-weight: 600;
    }

    .contact-form {
      display: grid;
      gap: 1.5rem;
      margin-top: 2rem;
      max-width: 600px;
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
