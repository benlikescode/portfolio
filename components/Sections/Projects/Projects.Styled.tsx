import styled from 'styled-components'

const StyledProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;

  .projectsSection {
    max-width: 1160px;
    width: 100%;
    padding: 5rem 0 10rem 0;
  }

  .projectCards {
    margin-top: 6rem;

    @media (max-width: 600px) {
      margin-top: 4rem;
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
`

export default StyledProjects
