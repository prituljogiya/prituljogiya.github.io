import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Interests from './components/Interests'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation activeSection={activeSection} />
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      {/* <Testimonials /> */}
      <Interests />
      <Contact />
    </div>
  )
}

export default App

