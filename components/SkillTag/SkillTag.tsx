import { FC, ReactNode } from 'react'
import { StyledSkillTag } from '.'
import { Icon } from '../Icon'

type Props = {
  label: string;
  icon: ReactNode;
}

const SkillTag: FC<Props> = ({ label, icon }) => {
  return (
    <StyledSkillTag>
      <div className="iconWrapper">
        <Icon size={23}>{icon}</Icon>
      </div>

      <span className="skillTagLabel">{label}</span>
    </StyledSkillTag>
  )
}

export default SkillTag
