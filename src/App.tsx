import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SectionDivider } from './components/SectionDivider'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <div id="top">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SectionDivider className="section-divider--shell section-divider--flush-top" />
        <About />
        <SectionDivider className="section-divider--shell" />
        <Projects />
        <SectionDivider className="section-divider--shell" />
        <Experience />
        <SectionDivider className="section-divider--shell" />
        <Skills />
        <Contact />
      </main>
      <SectionDivider className="section-divider--footer" />
      <Footer />
    </div>
  )
}
