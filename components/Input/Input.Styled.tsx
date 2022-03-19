import styled from 'styled-components'

type StyledProps = {
  isTextArea?: boolean;
}

const StyledInput = styled.div<StyledProps>`
  width: 100%;
  
  label {
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
    color: #6d6d6d;
  }

  .input-styled {
    height: ${({ isTextArea }) => isTextArea ? '130' : '42'}px;
    display: flex;
    align-items: center;
   
    input {
      height: 100%;
      border-radius: 5px;
      padding: 0 14px;
      background-color: #191919;
      width: 100%;
      box-sizing: border-box;
      color: var(--color1);
      font-size: 1rem;
      font-weight: 400;
      
      ::placeholder {
        color: var(--color1);
      }
 
    }
  }

  textarea {
    height: 100%;
    border-radius: 5px;
    padding: 14px;
    background-color: #191919;
    width: 100%;
    box-sizing: border-box;
    color: var(--color1);
    font-size: 1rem;
    font-weight: 400;
    resize: none;
    line-height: 24px;
    
    ::placeholder {
      color: var(--color1);
    }
  }

  .inputError {
    color: var(--lightRed);
    font-size: 14px;
    margin-top: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;
    
    svg {
      fill: var(--lightRed);
      height: 14px;
      width: 14px;
    }
  }
  
  .inputErrorText {
    display: block;
    margin-top: 3px;
    margin-left: 10px;
  }
`

export default StyledInput