import { useEffect, useState } from 'react'
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
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let accumulatedDelta = 0
    let frame: number | null = null

    const handleScroll = () => {
      if (frame !== null) return

      frame = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        accumulatedDelta += currentScrollY - lastScrollY
        lastScrollY = currentScrollY

        if (currentScrollY <= 20) {
          setIsHidden(false)
          accumulatedDelta = 0
        } else if (accumulatedDelta >= 12) {
          setIsHidden(true)
          accumulatedDelta = 0
        } else if (accumulatedDelta <= -12) {
          setIsHidden(false)
          accumulatedDelta = 0
        }

        frame = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className={`site-header${isHidden ? ' site-header-hidden' : ''}`}>
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
