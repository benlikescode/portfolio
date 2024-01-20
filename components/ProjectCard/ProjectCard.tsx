import Image from 'next/image'
import { FC } from 'react'
import Project from '../../types/Project'
import { ExternalLinkIcon, GlobeIcon } from '../Icon'
import { GithubIcon, RedditIcon } from '../Icon/Socials'
import { StyledProjectCard } from './'

type Props = {
  project: Project
}

const ProjectCard: FC<Props> = ({ project }) => {
  const getLinkIcon = (type: Project['links'][number]['type']) => {
    switch (type) {
      case 'github':
        return <GithubIcon />
      case 'reddit':
        return <RedditIcon />
      case 'web':
        return <GlobeIcon />
    }
  }

  const getLinkLabel = (link: Project['links'][number]) => {
    switch (link.type) {
      case 'github':
        return 'GitHub'
      case 'reddit':
        return 'Reddit'
      case 'web':
        return new URL(link.url).hostname
    }
  }

  return (
    <StyledProjectCard>
      <div className="project-details">
        <h3 className="project-header">
          {project.name}
          <div className="project-links">
            {project.links.map((link) => {
              return (
                <a
                  className="project-link-item"
                  data-tooltip={getLinkLabel(link)}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  key={link.url}
                >
                  {getLinkIcon(link.type)}
                </a>
              )
            })}
          </div>
        </h3>

        <div className="project-desc">
          <p>{project.description}</p>
        </div>

        <ul className="tech-tags">
          {project.tags.map((tag, idx) => (
            <li className="tech-tag" key={idx}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>

        <a className="post-btn" href={project.button.url} target="_blank" rel="noreferrer" draggable={false}>
          {project.button.label}
          <ExternalLinkIcon />
        </a>
      </div>

      <div className="project-preview-wrapper">
        <div className="project-preview">
          <Image src={project.imageUrl} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
    </StyledProjectCard>
  )
}

export default ProjectCard
