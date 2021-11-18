import { FC, ReactNode } from 'react'
import { StyledButton } from '.'

type Props = {
  type: 'solid' | 'ghost' | 'icon'
  callback?: any
  primaryColor?: string
  secondaryColor?: string
  isDisabled?: boolean
  className?: string
  children?: ReactNode
  width?: string
  isRound?: boolean
}

const Button: FC<Props> = ({ type, callback, primaryColor, secondaryColor, isDisabled, className, children, width, isRound }) => {
  return (
    <StyledButton type={type} primaryColor={primaryColor} secondaryColor={secondaryColor} isDisabled={isDisabled} width={width} isRound={isRound}>
      <button onClick={callback ? (e) => callback(e) : undefined} className={className}>
        {children}
      </button>
    </StyledButton>
  )
}

export default Button