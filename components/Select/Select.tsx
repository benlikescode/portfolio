import { FC, useContext } from 'react'
import { StyledSelect } from '.'
import { colorStore } from '../ColorContext'

type Props = {
  options: string[]
  placeholder?: string
  callback?: any;
  value?: string
}

const Select: FC<Props> = ({ options, placeholder, callback, value }) => {
  const { colorTheme, setMode, colorName } = useContext(colorStore)
 
  return (
    <StyledSelect>
      <select onChange={(e) => setMode(e.currentTarget.value)} value={colorName}>
        {placeholder && <option>{placeholder}</option>}
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      <span className="selectSuffix">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517"></path></svg>
      </span>
    </StyledSelect>
  )
}

export default Select