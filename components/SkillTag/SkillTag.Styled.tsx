import styled from 'styled-components'

const StyledSkillTag = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px 8px 8px;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.09);
  
  .iconWrapper {
    background-color: #fff;
    border-radius: 5px;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skillTagLabel {
    color: var(--color1);
  }
`

export default StyledSkillTag
