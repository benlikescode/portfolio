import { ExternalLinkIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { StyledProjectCard } from '.'
import Project from '../../types/Project'
import { Icon } from '../Icon'
import { GithubIcon } from '../Icon/Socials'
import Image from 'next/image'

type Props = {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <StyledProjectCard>
      <div className="previewImg">
        <Image src={project.imageUrl} alt={`${project.name} preview`} layout="fill" />
      </div>

      <section className="projectContent">
        <div className="titleRow">
          <h4>{project.name}</h4>
          <div className="projectLinks">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <Icon size={22}>
                <GithubIcon />
              </Icon>
            </a>

            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <Icon size={26}>
                <ExternalLinkIcon />
              </Icon>
            </a>          
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
