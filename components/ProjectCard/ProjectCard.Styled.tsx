import styled from 'styled-components'

const StyledProjectCard = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 5rem; */

  display: grid;
  gap: 4rem;
  grid-template-columns: 400px auto;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  .project-details {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 30rem;

    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      margin-bottom: 5rem;

      @media (min-width: 950px) {
        margin-right: 5rem;
      }
    }

    .project-header {
      color: #fff;
      font-weight: 900;
      font-size: 28px;

      /* @media (max-width: 600px) {
      font-size: 1.875rem;
    } */
    }

    .project-desc {
      font-size: 18px;
      color: #979797;
      margin-top: 4px;

      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        margin-top: 1.5rem;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-top: 14px;

      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        margin-top: 1.5rem;
      }

      .project-link-item {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-right: 1rem;
        }

        &:hover {
          color: ${({ theme }) => theme.color.avatar};
        }

        .link-label {
          margin-left: 0.5rem;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      }
    }

    .tech-tags {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 26px;

      .tech-tag {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.5rem;
        padding: 0.5rem 0.85rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(146 146 146);
        font-size: 14px;

        @media (max-width: 600px) {
          font-size: 0.8rem;
        }

        @supports (-webkit-touch-callout: none) and (not (translate: none)) {
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .project-preview-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    /* background: linear-gradient(0deg, #7928ca91, #7928ca1a); */
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.color.primary}91, ${theme.color.primary}1a)`};
    border-radius: 1rem;
    max-width: 40rem;
    padding-top: 100%;
    grid-area: 1;

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      /* box-shadow: inset 0 0 0 1px #6a23b163; */
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.gradient};
      border-radius: 1rem;
    }

    .project-preview {
      position: absolute;
      top: 30px;
      left: 30px;
      height: 484.5px;
      width: 960px;

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

      /* @media (max-width: 600px) {
      width: 533px;
      height: 269px;
      /*
      :hover {
        transform: none;
      }
      */

      @media (max-width: 500px) {
        top: 1.5rem;
        left: 1.5rem;
      }
    }
  }
`

export default StyledProjectCard
