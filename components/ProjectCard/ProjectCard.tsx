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
        <Image src={project.imageUrl} alt={`${project.name} preview`} width={546} height={240} objectFit="cover" />
      </div>
      

      <section className="projectContent">
        <div className="titleRow">
          <h4>{project.name}</h4>
          <div className="projectLinks">
            {project.githubLink && (
              <a className="projectLinkItem" href={project.githubLink} target="_blank" rel="noreferrer">
                <Icon size={22}>
                  <GithubIcon />
                </Icon>
              </a>
            )}
           
            {project.liveLink && (
              <a className="projectLinkItem" href={project.liveLink} target="_blank" rel="noreferrer">
                <Icon size={26}>
                  <ExternalLinkIcon />
                </Icon>
              </a>  
            )}               
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
