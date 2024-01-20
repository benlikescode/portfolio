import { FC } from 'react'
import PROJECTS from '../../../utils/constants/projects'
import { ProjectCard } from '../../ProjectCard'
import { StyledProjects } from './'

const Projects: FC = () => {
  return (
    <StyledProjects>
      <section className="projects-section" id="projects">
        <h2>Featured Projects</h2>

        <div className="project-cards">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </StyledProjects>
  )
}

export default Projects
