import styled from 'styled-components'

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }  

  @media (max-width: 950px) {
    flex-direction: column;
  }
  
  .projectDetails {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
    max-width: 30rem;
  }

  .projectHeader {
    color: #e99465;
    font-weight: 600;
    font-size: 2.25rem;
    font-family: var(--headerFont);
    letter-spacing: -2px;

    @media (max-width: 600px) {
      font-size: 1.875rem;
    }
  }

  .projectDesc {
    font-size: 18px;
  }

  .techTags {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  .techTag {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: 0.5rem 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #fdceb5;
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

  .projectPreviewWrapper {
    position: relative;
    height: 25rem;
    width: 100%;
    overflow: hidden;
    background: ${({ theme }) => `linear-gradient(180deg, #ffc6a8 0%, ${theme.color.primary} 100%)`};
    border-radius: 1rem;
    max-width: 50rem; 

    @media (min-width: 950px) {
      flex: 1;
    }

    @media (max-width: 600px) {
      height: 16rem;
    }
  }

  .projectPreview {
    position: absolute;
    top: 2.5rem;
    left: 2.5rem;
    height: 484.5px;
    width: 960px;
    overflow: hidden;
    border-radius: 0.5rem;
    //cursor: pointer;

    :focus {
      outline: none;
    }

    /*
    :hover {
      transform: scale(1.01);
    }
    */

    @media (max-width: 600px) {
      width: 533px;
      height: 269px;
      /*
      :hover {
        transform: none;
      }
      */
    }

    @media (max-width: 500px) {
      top: 1.5rem;
      left: 1.5rem;
    }
  }

  .projectLinks {
    display: flex;
    align-items: center;
  }

  .projectLinkItem {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .linkLabel {
    margin-left: 0.5rem;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`

export default StyledProjectCard
