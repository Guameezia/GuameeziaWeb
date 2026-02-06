import { siteConfig } from '../config'
import { useLanguage } from '../contexts/LanguageContext'
import './Repository.css'

function Repository() {
  const { t } = useLanguage()

  // Retrieve repository translation by current language
  const getRepositoryTranslation = (repositoryId) => {
    const repositoryKey = `project${repositoryId}`
    return t.projects[repositoryKey] || {}
  }

  return (
    <section id="repositories" className="repositories">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="repositories-grid">
          {siteConfig.projects.map((project) => {
            const translation = getRepositoryTranslation(project.id)
            return (
              <div key={project.id} className="repository-card">
                <div className="repository-image">
                  <img src={project.image} alt={translation.title || `Repository ${project.id}`} />
                  <div className="repository-overlay">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="repository-link"
                    >
                      {t.projects.viewProject}
                    </a>
                  </div>
                </div>
                <div className="repository-info">
                  <h3 className="repository-title">{translation.title || `Repository ${project.id}`}</h3>
                  <p className="repository-description">{translation.description || ''}</p>
                  <div className="repository-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="repository-tag">{tag}</span>
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

export default Repository
