import { personal } from '../content/personal'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <p>Earth observation · Geospatial web applications</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
