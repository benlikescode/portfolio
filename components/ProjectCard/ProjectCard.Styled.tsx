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
      color: ${({ theme }) => theme.color.text[50]};
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
            fill: ${({ theme }) => theme.color.icon};

            &:hover {
              fill: ${({ theme }) => theme.color.mode.secondary};
            }
          }

          &:not(:last-child) {
            margin-right: 8px;
          }

          &:hover {
            color: ${({ theme }) => theme.color.mode.avatar};
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
      color: ${({ theme }) => theme.color.text[300]};
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
        background: ${({ theme }) => theme.color.transparent[50]};
        border-radius: 50rem;
        padding: 0 12px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.color.text[400]};
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
      background-color: ${({ theme }) => theme.color.mode.primary}60;
      color: ${({ theme }) => theme.color.text[50]};
      transition: 0.2s;

      .arrow {
        transition: 0.2s;
      }

      &:hover {
        background-color: ${({ theme }) => theme.color.mode.primary}90;

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
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.color.mode.primary}91, ${theme.color.mode.primary}1a)`};
    border-radius: 1rem;
    grid-area: 1;
    height: 250px;
    max-width: 480px;
    width: 100%;

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.mode.gradient};
      border-radius: 1rem;
    }

    .project-preview {
      position: absolute;
      top: 30px;
      left: 30px;
      height: 404px;
      width: 737px;
      user-select: none;

      @media (max-width: 900px) {
        top: 16px;
        left: 16px;
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
    }
  }
`

export default StyledProjectCard
