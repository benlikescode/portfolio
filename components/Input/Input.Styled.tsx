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
    color: #6d6d6d;
  }

  .input-wrapper {
    height: ${({ isTextArea }) => (isTextArea ? '120' : '42')}px;
    display: flex;
    align-items: center;

    input,
    textarea {
      height: 100%;
      border-radius: 5px;
      background-color: #131313;
      border: 1px solid #181818;
      font-size: 15px;
      width: 100%;
      box-sizing: border-box;
      color: #dcdcdc;
      font-weight: 400;
      padding: 0 14px;

      &::placeholder {
        color: #555;
      }
    }

    textarea {
      padding: 14px;
      resize: none;
      line-height: 20px;
    }
  }

  .input-error {
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

    .input-error-text {
      display: block;
      margin-top: 3px;
      margin-left: 10px;
    }
  }
`

export default StyledInput
