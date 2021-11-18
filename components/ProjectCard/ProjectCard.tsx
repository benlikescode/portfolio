import { ExternalLinkIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { StyledProjectCard } from '.'
import Project from '../../types/Project'
import { Icon } from '../Icon'
import { GithubIcon } from '../Icon/Socials'

type Props = {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <StyledProjectCard>
      <div className="previewImg">
        <img src={project.imageUrl} alt={`${project.name} preview`} />
      </div>

      <section className="projectContent">
        <div className="titleRow">
          <h4>{project.name}</h4>
          <div className="projectLinks">
            <Icon size={22}>
              <GithubIcon />
            </Icon>
            <Icon size={26}>
              <ExternalLinkIcon />
            </Icon>
          </div>
        </div>

        <p className="projectDesc">{project.description}</p>

        <ul className="techTags">
          {project.tags.map((tag, idx) => (
            <li className="techTag" key={idx}>
              <span>{tag}</span>
            </li>
          ))}    
        </ul>
      </section>
    </StyledProjectCard>
  )
}

export default ProjectCard
