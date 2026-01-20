import { siteConfig } from '../config'
import { useLanguage } from '../contexts/LanguageContext'
import './Projects.css'

function Projects() {
  const { t } = useLanguage()

  // Retrieve project translation by current language
  const getProjectTranslation = (projectId) => {
    const projectKey = `project${projectId}`
    return t.projects[projectKey] || {}
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {siteConfig.projects.map((project) => {
            const translation = getProjectTranslation(project.id)
            return (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={translation.title || `Project ${project.id}`} />
                  <div className="project-overlay">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {t.projects.viewProject}
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{translation.title || `Project ${project.id}`}</h3>
                  <p className="project-description">{translation.description || ''}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
