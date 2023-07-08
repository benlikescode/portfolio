import styled from 'styled-components'

const StyledProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;

  .projects-section {
    max-width: var(--maxWidth);
    width: 100%;
    padding: 4rem 0 10rem 0;
    scroll-margin-top: 60px;

    h2 {
      font-size: 15px;
      font-family: var(--headerFont);
      font-weight: 600;
      letter-spacing: 3px;
      color: #ffffff42;
      text-transform: uppercase;
    }

    .project-cards {
      margin-top: 4rem;
    }
  }
`

export default StyledProjects
