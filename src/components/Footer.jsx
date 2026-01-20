import { siteConfig } from '../config'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Copyright &copy; {currentYear} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
