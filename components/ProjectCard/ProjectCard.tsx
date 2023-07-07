import Image from 'next/image'
import { FC } from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Project from '../../types/Project'
import { Icon } from '../Icon'
import { GithubIcon } from '../Icon/Socials'
import { StyledProjectCard } from './'

type Props = {
  project: Project
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <StyledProjectCard>
      <div className="project-details">
        <h3 className="project-header">{project.name}</h3>

        <div className="project-desc">
          <p>{project.description}</p>
        </div>

        <div className="project-links">
          {project.githubLink && (
            <a className="project-link-item" href={project.githubLink} target="_blank" rel="noreferrer">
              <Icon size={22}>
                <GithubIcon />
              </Icon>
              <span className="link-label">Github</span>
            </a>
          )}

          {project.liveLink && (
            <a className="project-link-item" href={project.liveLink} target="_blank" rel="noreferrer">
              <Icon size={26} fill="#626262">
                <ExternalLinkIcon />
              </Icon>
              <span className="link-label">Website</span>
            </a>
          )}
        </div>

        <ul className="tech-tags">
          {project.tags.map((tag, idx) => (
            <li className="tech-tag" key={idx}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-preview-wrapper">
        <div className="project-preview">
          <Image src={project.imageUrl} alt="GeoHub Project Preview" layout="fill" objectFit="cover" />
        </div>
      </div>
    </StyledProjectCard>
  )
}

export default ProjectCard
