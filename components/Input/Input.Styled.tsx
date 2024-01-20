import styled from 'styled-components'

type StyledProps = {
  isTextArea?: boolean
}

const StyledInput = styled.div<StyledProps>`
  width: 100%;

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
    color: ${({ theme }) => theme.color.text[700]};
  }

  .input-wrapper {
    height: ${({ isTextArea }) => (isTextArea ? '120' : '42')}px;
    display: flex;
    align-items: center;

    input,
    textarea {
      height: 100%;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.color.inputBackground};
      border: 1px solid ${({ theme }) => theme.color.inputBorder};
      font-size: 15px;
      width: 100%;
      box-sizing: border-box;
      color: ${({ theme }) => theme.color.text[100]};
      font-weight: 400;
      padding: 0 14px;

      &::placeholder {
        color: ${({ theme }) => theme.color.text[700]};
      }
    }

    textarea {
      padding: 14px;
      resize: none;
      line-height: 20px;
    }
  }
`

export default StyledInput
