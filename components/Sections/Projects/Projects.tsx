import { FC } from 'react'
import { StyledProjects } from '.'
import Project from '../../../types/Project'
import { ProjectCard } from '../../ProjectCard'

const Projects: FC = () => {
  const project1: Project = {
    name: 'GeoHub',
    imageUrl: '/images/GeoHub.png',
    description: 'GeoHub is a collection of fun geography games. After being placed somewhere random in the world, can you guess where you are?',
    tags: ['NextJS', 'TypeScript', 'MongoDB', 'Maps API'],
    githubLink: 'https://github.com/benlikescode/geohub',
    liveLink: 'https://geohub.vercel.app'
  }

  const project2: Project = {
    name: 'Discord Clone',
    imageUrl: '/images/Bencord.png',
    description: 'A community based messaging app with many features such as realtime messaging, inviting friends, and voice chat.',
    tags: ['React', 'TypeScript', 'Firebase', 'Redux'],
    githubLink: 'https://github.com/benlikescode/discord'
  }

  return (
    <StyledProjects id="projects">
      <section className="projectsSection">
        <h2>Featured Projects</h2>
        
        <div className="projectCards">
          <ProjectCard project={project1} />
          <ProjectCard project={project2} />
        </div>
      </section>
    </StyledProjects>
  )
}

export default Projects
