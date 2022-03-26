import styled from 'styled-components'

type StyledProps = {
  lessGap?: boolean;
}

const StyledSkillTag = styled.li<StyledProps>`
  display: flex;
  align-items: center;
  padding: 0.875rem;
  padding-right: 1.5rem;
  width: fit-content;
  border-radius: 0.5rem;
  background-color: rgb(255 197 166 / 10%);
  margin-top: 10px;
  
  :hover {
    background-color: rgb(220 180 150 / 10%);
  }

  @supports (-webkit-touch-callout: none) and (not (translate: none)) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    padding-right: 0.875rem;
  }
  
  .iconWrapper {
    border-radius: 5px;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    @media (max-width: 600px) {
      height: 30px;
      width: 30px;
    }
  }

  .icon {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 100%;
      width: 100%;

      path {
        stroke-width: 1.5;
        height: 100%;
        width: 100%;
      }
    }
  }

  .skillTagLabel {
    color: #fdceb5;
    font-size: 1rem;
    margin-left: ${({ lessGap }) => lessGap ? 5 : 10}px;
  }
`

export default StyledSkillTag
