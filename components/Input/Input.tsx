import { FC } from 'react'
import { StyledInput } from './'

type Props = {
  label?: string
  type: string
  name: string
  placeholder?: string
  value?: string
  callback?: any
  readOnly?: boolean
  autoComplete?: string
  maxLength?: number
  isTextArea?: boolean
  isRequired?: boolean
}

const Input: FC<Props> = ({
  label,
  type,
  name,
  placeholder,
  value,
  callback,
  readOnly,
  autoComplete,
  maxLength,
  isTextArea,
  isRequired,
}) => {
  const onInputChange = (value: string) => {
    if (callback) {
      callback(value)
    }
  }

  return (
    <StyledInput isTextArea={isTextArea}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="input-wrapper">
        {isTextArea ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={(e) => onInputChange(e.currentTarget.value)}
            value={value}
            lang="en"
            readOnly={readOnly}
            autoComplete={autoComplete}
            maxLength={maxLength || 2000}
            required={isRequired}
          />
        ) : (
          <input
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={(e) => onInputChange(e.currentTarget.value)}
            value={value}
            type={type}
            lang="en"
            readOnly={readOnly}
            autoComplete={autoComplete}
            maxLength={maxLength || 2000}
            required={isRequired}
          />
        )}
      </div>
    </StyledInput>
  )
}

export default Input
