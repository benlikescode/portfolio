import { FC } from 'react'
import SKILLS from '../../../utils/constants/skills'
import { SkillTag } from '../../SkillTag'
import { StyledAbout } from './'

const About: FC = () => {
  return (
    <StyledAbout>
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p className="about-text">
          I am a passionate <mark>software developer</mark> who enjoys building amazing frontend designs and optimizing
          backend logic.
        </p>
        <div className="skills-wrapper">
          <h3>Main Skills</h3>
          <ul>
            {SKILLS.map((skill) => (
              <SkillTag skill={skill} key={skill.name} />
            ))}
          </ul>
        </div>
      </section>
    </StyledAbout>
  )
}

export default About
