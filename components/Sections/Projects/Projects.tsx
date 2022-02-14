import { FC } from 'react'
import { StyledProjects } from '.'
import Project from '../../../types/Project'
import { ProjectCard } from '../../ProjectCard'

const Projects: FC = () => {

  const project1: Project = {
    name: 'GeoHub',
    imageUrl: '/images/GeoHub.png',
    description: 'The main game mode is based on the popular game Geoguessr, where you have to guess where you are in the world after being placed in a random location.',
    tags: ['NextJS', 'TypeScript', 'MongoDB', 'Maps API'],
    githubLink: 'https://github.com/benlikescode/geohub',
    liveLink: 'https://geohub-prod.vercel.app/'
  }

  const project2: Project = {
    name: 'Discord Clone',
    imageUrl: '/images/Bencord.png',
    description: 'A frontend clone of discord with many features such as realtime messaging, creating servers, inviting friends, banning, and basic voice chat functionality.',
    tags: ['React', 'TypeScript', 'Firebase', 'Redux'],
    githubLink: 'https://github.com/benlikescode/discord'
  }

  return (
    <StyledProjects id="projects">
      <section className="projectsSection">
        <h2>Projects</h2>
        <div className="projectCards">
          <ProjectCard project={project1} />
          <ProjectCard project={project2} />
        </div>
      </section>
    </StyledProjects>
  )
}

export default Projects
