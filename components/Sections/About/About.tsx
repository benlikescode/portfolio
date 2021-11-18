import { FC } from 'react'
import { StyledAbout } from '.'
import { FigmaIcon, FirebaseIcon, GithubIcon, JiraIcon, MongoIcon, MySQLIcon, NextIcon, NodeIcon, NotionIcon, ReactIcon, ReduxIcon, SlackIcon, TSIcon } from '../../Icon'
import { SkillTag } from '../../SkillTag'

const About: FC = () => {
  return (
    <StyledAbout>
      <section className="about" id="about">
        <h3>About Me</h3>
        <p className="aboutText">I’m a passionate software developer with experience in building amazing frontend designs and optimizing backend logic.</p>
        <section className="skillsWrapper">
          <div className="skillRowWrapper">
            <h4>Main Skills</h4>
            <ul className="skillRow">
              <SkillTag label="React" icon={<ReactIcon />}/>
              <SkillTag label="TypeScript" icon={<TSIcon />}/>
              <SkillTag label="NextJS" icon={<NextIcon />}/>
              <SkillTag label="NodeJS" icon={<NodeIcon />}/>
              <SkillTag label="Redux" icon={<ReduxIcon />}/>
              <SkillTag label="MongoDB" icon={<MongoIcon />}/>
              <SkillTag label="Firebase" icon={<FirebaseIcon />}/>
              <SkillTag label="MySQL" icon={<MySQLIcon />}/>
            </ul>       
          </div>

          <div className="skillRowWrapper">
            <h4>Tools</h4>
            <ul className="skillRow">
              <SkillTag label="Slack" icon={<SlackIcon />}/>
              <SkillTag label="Github" icon={<GithubIcon />}/>
              <SkillTag label="Jira" icon={<JiraIcon />}/>
              <SkillTag label="Notion" icon={<NotionIcon />}/>
              <SkillTag label="Figma" icon={<FigmaIcon />}/>       
            </ul>       
          </div>
        </section>
      </section>
    </StyledAbout>
  )
}

export default About
