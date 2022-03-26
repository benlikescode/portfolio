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
      <div className="projectDetails">
        <h3 className="projectHeader">{project.name}</h3>

        <div className="projectLinks">
          {project.githubLink && (
            <a className="projectLinkItem" href={project.githubLink} target="_blank" rel="noreferrer">
              <Icon size={22}>
                <GithubIcon />
              </Icon>
              <span className="linkLabel">Github</span>
            </a>
          )}
        
          {project.liveLink && (
            <a className="projectLinkItem" href={project.liveLink} target="_blank" rel="noreferrer">
              <Icon size={26}>
                <ExternalLinkIcon />
              </Icon>
              <span className="linkLabel">Website</span>
            </a>  
          )}               
        </div>
        
        <div className="projectDesc">
          <p>{project.description}</p>
        </div>

        <ul className="techTags">
          {project.tags.map((tag, idx) => (
            <li className="techTag" key={idx}>
              <span>{tag}</span>
            </li>
          ))}    
        </ul>
      </div>

      <div className="projectPreviewWrapper">
        <a className="projectPreview" href={project.githubLink} target="_blank" rel="noreferrer" tabIndex={-1}>
          <Image src={project.imageUrl} alt="GeoHub Project Preview" layout='fill' objectFit='cover' objectPosition="0%" />
        </a>
      </div> 
    </StyledProjectCard>
  )
}

export default ProjectCard
