import styled from 'styled-components'

const StyledSkillTag = styled.li`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.transparent[0]};
  margin-top: 10px;
  padding: 6px;

  &:hover {
    background-color: ${({ theme }) => `${theme.color.mode.secondary}20`};
    transition: all 0.2s ease;

    .icon svg {
      fill: ${({ theme }) => theme.color.mode.secondary};
    }
  }

  @supports (-webkit-touch-callout: none) and (not (translate: none)) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .icon {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    padding: 5px;

    @media (max-width: 600px) {
      height: 30px;
      width: 30px;
    }

    svg {
      height: 100%;
      width: 100%;
      fill: ${({ theme }) => theme.color.text[0]};
      transition: all 0.2s ease;

      path {
        stroke-width: 1.5;
        height: 100%;
        width: 100%;
      }
    }
  }
`

export default StyledSkillTag
