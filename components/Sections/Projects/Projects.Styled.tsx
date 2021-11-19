import styled from 'styled-components'

const StyledProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .projectsSection {
    max-width: ${({ theme }) => `${theme.breakpoint.l}px`};
    width: 100%;
    padding: 5rem 0;
  }

  .projectCards {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }
  
`

export default StyledProjects
