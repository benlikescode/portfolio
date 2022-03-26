import { FC, ReactNode } from 'react'
import { StyledSkillTag } from '.'
import { Icon } from '../Icon'

type Props = {
  label: string;
  icon: ReactNode;
  lessGap?: boolean;
}

const SkillTag: FC<Props> = ({ label, icon, lessGap }) => {
  return (
    <StyledSkillTag lessGap={lessGap}>
      <div className="iconWrapper">
        <div className="icon">
          {icon}
        </div>
      </div>

      <span className="skillTagLabel">{label}</span>
    </StyledSkillTag>
  )
}

export default SkillTag
