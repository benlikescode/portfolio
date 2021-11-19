import styled from 'styled-components'

const StyledProjectCard = styled.div`
  background-color: var(--background3);
  border-radius: 10px;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .previewImg {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
  }

  .projectContent {
    margin-top: 2rem;
  }

  h4 {
    font-size: 26px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 20px;
    }
  }

  .titleRow {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .projectLinks {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .projectDesc {
    color: var(--color2);
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 1rem;
      line-height: 24px;
    }
  }

  .techTags {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
      gap: 10px;
    }
  }

  .techTag {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50px;
    height: 30px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: 0.8rem;
    }
  }
`

export default StyledProjectCard
