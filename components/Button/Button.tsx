import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { StyledButton } from '.'

type Props = {
  buttonType: 'solid' | 'ghost' | 'icon';
  primaryColor?: string;
  secondaryColor?: string;
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
  width?: string;
  isRound?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ buttonType, primaryColor, secondaryColor, isDisabled, className, children, width, isRound, ...rest }) => {
  return (
    <StyledButton 
      buttonType={buttonType} 
      primaryColor={primaryColor} 
      secondaryColor={secondaryColor} 
      isDisabled={isDisabled} 
      width={width} 
      isRound={isRound}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button