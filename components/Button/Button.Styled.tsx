import styled from 'styled-components'

type StyledProps = {
  buttonType: 'solid' | 'ghost' | 'icon'
  primaryColor?: string
  secondaryColor?: string
  isDisabled?: boolean
  width?: string
  isRound?: boolean
}

const StyledButton = styled.button<StyledProps>`
  width: ${({ width }) => width ? width : 'fit-content'};
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${({ isRound }) => isRound ? '20' : '5'}px;
  height: 42px;
  padding: 0 25px;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  user-select: none;

  ${({ buttonType, isDisabled, theme }) => 
    buttonType === 'solid' && 
    !isDisabled && `
      background-color: ${theme.color.primary};
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.05);

      :hover {
        background-color: ${theme.color.hover};
      }
  `}
  
  ${({ buttonType, isDisabled }) => 
    buttonType === 'ghost' && 
    !isDisabled && `
      background-color: transparent;
      color: #fff;
      box-shadow: 0 0 0 1px #2F3133;
      :hover {
        box-shadow: 0 0 0 2px #2F3133;
      }
  `}
  
  ${({ buttonType, isDisabled }) => 
    buttonType === 'icon' && 
    !isDisabled && `
      padding: 0;
      background-color: transparent;
      height: fit-content;
      width: fit-content;
  `}
  
  ${({ primaryColor, secondaryColor, isDisabled }) => 
    primaryColor && 
    secondaryColor && 
    !isDisabled && `
      background-color: ${ primaryColor };
      color: ${ secondaryColor };
  `}

  ${({ isDisabled }) => 
    isDisabled && `
      background-color: var(--background3);
      color: var(--color2);
      pointer-events: none;
      opacity: 0.5;
  `}
`

export default StyledButton