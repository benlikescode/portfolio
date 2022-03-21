import styled from 'styled-components'

const StyledProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;

  .projectsSection {
    max-width: 1000px;
    width: 100%;
    padding: 5rem 0 10rem 0;
  }

  .projectCards {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;

    }
  }

  h2 {
    font-size: 2.5rem;

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
`

export default StyledProjects
