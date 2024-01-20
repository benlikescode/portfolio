import { FC } from 'react'
import SKILLS from '../../utils/constants/skills'
import { StyledSkillTag } from './'

type Props = {
  skill: (typeof SKILLS)[number]
}

const SkillTag: FC<Props> = ({ skill }) => {
  return (
    <StyledSkillTag data-tooltip={skill.name}>
      <div className="icon">{skill.icon}</div>
    </StyledSkillTag>
  )
}

export default SkillTag
