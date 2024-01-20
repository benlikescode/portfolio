import styled from 'styled-components'

type StyledProps = {
  buttonType: 'solid' | 'icon'
  primaryColor?: string
  secondaryColor?: string
  isDisabled?: boolean
  width?: string
  isRound?: boolean
}

const StyledButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  height: 42px;
  width: ${({ width }) => (width ? width : 'fit-content')};
  border-radius: ${({ isRound }) => (isRound ? '20' : '5')}px;
  padding: 0 25px;
  font-size: 1rem;
  user-select: none;
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};

  ${({ buttonType, isDisabled, theme }) =>
    buttonType === 'solid' &&
    !isDisabled &&
    `
      background-color: ${theme.color.mode.primary};
      color: #ffffff;
      border: 1px solid ${theme.color.transparent[50]};

      :hover {
        background-color: ${theme.color.mode.hover};
      }
  `}
`

export default StyledButton
