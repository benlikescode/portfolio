import styled from 'styled-components'

const StyledProjectCard = styled.div`
  background-color: var(--background3);
  border-radius: 10px;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .previewImg {
    height: 259px;
    width: 100%;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
      border-radius: inherit;
      height: 100%;
      width: 100%;
    }
  }

  .projectContent {
    margin-top: 2rem;
  }

  h4 {
    font-size: 26px;
    font-weight: 600;
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
  }

  .techTags {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .techTag {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50px;
    height: 30px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default StyledProjectCard
