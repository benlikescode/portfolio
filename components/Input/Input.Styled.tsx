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
    color: var(--color2);
  }

  .input-styled {
    height: ${({ isTextArea }) => isTextArea ? '130' : '42'}px;
    display: flex;
    align-items: center;
   
    input {
      height: 100%;
      border-radius: 5px;
      padding: 0 14px;
      background-color: var(--background3);
      width: 100%;
      box-sizing: border-box;
      color: var(--color1);
      border: 1px solid var(--borderColor);
      outline: none;
      font-size: 1rem;
      font-weight: 400;
      
      ::placeholder {
        color: var(--color1);
      }

      :focus {
        border: 1px solid #8054ff;
        outline: 2px solid #8054ff61;
      } 
    }
  }

  textarea {
    height: 100%;
    border-radius: 5px;
    padding: 14px;
    background-color: var(--background3);
    width: 100%;
    box-sizing: border-box;
    color: var(--color1);
    border: 1px solid var(--borderColor);
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    resize: none;
    line-height: 24px;
    
    ::placeholder {
      color: var(--color1);
    }

    :focus {
      border: 1px solid #8054ff;
      outline: 2px solid #8054ff61;
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