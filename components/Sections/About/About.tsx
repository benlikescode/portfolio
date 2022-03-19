import { FC } from 'react'
import { StyledAbout } from '.'
import { SkillTag } from '../../SkillTag'
import { 
  FigmaIcon, 
  GithubIcon, 
  JiraIcon, 
  MongoIcon, 
  MySQLIcon, 
  NextIcon, 
  NodeIcon, 
  NotionIcon, 
  ReactIcon, 
  ReduxIcon, 
  SlackIcon, 
  TSIcon 
} from '../../Icon'

const About: FC = () => {
  return (
    <StyledAbout>
      <section className="about" id="about">
        <h2>About Me</h2>
        <p className="aboutText">I’m a passionate software developer with experience in building amazing frontend designs and optimizing backend logic.</p>
        <section className="skillsWrapper">
          <div className="skillRowWrapper">
            <h3>Main Skills</h3>
            <ul className="skillRow">
              <SkillTag label="React" icon={<ReactIcon />}/>
              <SkillTag label="TypeScript" icon={<TSIcon />}/>
              <SkillTag label="Node" icon={<NodeIcon />}/>
              <SkillTag label="Next" icon={<NextIcon />}/>
              <SkillTag label="Redux" icon={<ReduxIcon />}/>
              <SkillTag label="MongoDB" icon={<MongoIcon />}/>
            </ul>       
          </div>

          <div className="skillRowWrapper">
            <h3>Tools</h3>
            <ul className="skillRow">
              <SkillTag label="Slack" icon={<SlackIcon />}/>
              <SkillTag label="Github" icon={<GithubIcon />}/>
              <SkillTag label="Figma" icon={<FigmaIcon />}/>       
            </ul>       
          </div>
        </section>
      </section>
    </StyledAbout>
  )
}

export default About
