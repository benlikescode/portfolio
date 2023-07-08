import styled from 'styled-components'

const StyledProjectCard = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 400px auto;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 30rem;
    margin-top: 30px;

    @media (max-width: 900px) {
      margin-top: 0;
    }

    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      margin-bottom: 5rem;

      @media (min-width: 950px) {
        margin-right: 5rem;
      }
    }

    .project-header {
      color: #fff;
      font-weight: 900;
      font-size: 24px;
    }

    .project-desc {
      color: #979797;
      margin-top: 6px;

      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        margin-top: 1.5rem;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-top: 14px;

      .project-link-item {
        display: flex;
        align-items: center;

        svg {
          height: 20px;
          fill: #dcdcdc;

          &:hover {
            fill: ${({ theme }) => theme.color.secondary};
          }
        }

        &:not(:last-child) {
          margin-right: 12px;
        }

        &:hover {
          color: ${({ theme }) => theme.color.avatar};
        }

        .link-label {
          margin-left: 0.5rem;
          text-decoration: underline;
          text-underline-offset: 2px;
          font-size: 14px;
        }
      }
    }

    .tech-tags {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 26px;
      user-select: none;

      .tech-tag {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.5rem;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(146 146 146);
        font-size: 14px;

        @media (max-width: 600px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  .project-preview-wrapper {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.color.primary}91, ${theme.color.primary}1a)`};
    border-radius: 1rem;
    grid-area: 1;
    height: 400px;
    max-width: 480px;
    width: 100%;

    @media (max-width: 900px) {
      height: 250px;
    }

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gradient};
      border-radius: 1rem;
    }

    .project-preview {
      position: absolute;
      top: 30px;
      left: 30px;
      height: 484.5px;
      width: 960px;
      user-select: none;

      @media (max-width: 900px) {
        height: calc(484.5px / 2);
        width: calc(960px / 2);
      }

      img {
        border-radius: 0.5rem;
      }

      :focus {
        outline: none;
      }

      ::after {
        content: '';
        position: absolute;
        inset: 0;
        box-shadow: inset 0 0 0 1px #ffffff24, 0 5px 8px 0px #00000070;
        z-index: 1;
        border-radius: 0.5rem;
      }

      @media (max-width: 500px) {
        top: 20px;
        left: 20px;
      }
    }
  }
`

export default StyledProjectCard
