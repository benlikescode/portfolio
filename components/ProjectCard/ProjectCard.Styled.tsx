import styled from 'styled-components'

const StyledProjectCard = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 300px auto;
  align-items: center;

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
      font-size: 22px;
      display: flex;
      align-items: center;

      .project-links {
        display: flex;
        align-items: center;
        margin-left: 12px;

        .project-link-item {
          display: flex;
          align-items: center;

          svg {
            height: 20px;
            fill: #484848;

            &:hover {
              fill: ${({ theme }) => theme.color.secondary};
            }
          }

          &:not(:last-child) {
            margin-right: 8px;
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
    }

    .project-desc {
      color: #979797;
      margin-top: 10px;

      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        margin-top: 1.5rem;
      }
    }

    .tech-tags {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
      user-select: none;
      margin-top: 14px;

      .tech-tag {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 50rem;
        padding: 0 12px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(146 146 146);
        font-size: 13px;
      }
    }

    .post-btn {
      height: 40px;
      padding: 0 12px 0 14px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      width: fit-content;
      background-color: ${({ theme }) => theme.color.primary}60;
      color: white;
      border-color: ${({ theme }) => theme.color.primary}60;
      transition: 0.2s;

      .arrow {
        transition: 0.2s;
      }

      &:hover {
        background-color: ${({ theme }) => theme.color.primary}90;
        border-color: ${({ theme }) => theme.color.primary}90;

        .arrow {
          transform: translate(2px, -2px);
        }
      }

      svg {
        height: 22px;
        margin-left: 6px;
      }
    }
  }

  .project-preview-wrapper {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.color.primary}91, ${theme.color.primary}1a)`};
    border-radius: 1rem;
    grid-area: 1;
    height: 300px;
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
