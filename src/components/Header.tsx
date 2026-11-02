import { personal } from '../content/personal'
import { Icon } from './Icon'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">SEP / GIS</span>
        </a>
        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <a className="header-cv" href={personal.cv.href} download>
          <span>CV</span>
          <Icon name="download" size={17} />
        </a>
      </div>
    </header>
  )
}
