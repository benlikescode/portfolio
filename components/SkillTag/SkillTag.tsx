import { FC, ReactNode } from 'react'
import { StyledSkillTag } from './'

type Props = {
  icon: ReactNode
}

const SkillTag: FC<Props> = ({ icon }) => {
  return (
    <StyledSkillTag>
      <div className="icon">{icon}</div>
    </StyledSkillTag>
  )
}

export default SkillTag
