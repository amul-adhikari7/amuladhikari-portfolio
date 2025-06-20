import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiGithub } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'contact']
    const observers = sectionIds
      .map(id => {
        const section = document.getElementById(id)
        if (section) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setActiveSection(id)
              }
            },
            { threshold: 0.5 }
          )
          observer.observe(section)
          return observer
        }
        return null
      })
      .filter(Boolean)
    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  const handleNavigation = sectionId => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinkClass = section => `
    relative px-3 py-2 text-base font-medium transition-all duration-300
    ${
      activeSection === section
        ? 'text-white underline underline-offset-4'
        : 'text-gray-400 hover:text-white'
    }`

  return (
    <motion.nav
      className='fixed top-0 left-0 z-50 w-full bg-white/5 backdrop-blur-[10px] border-b border-white/10 shadow-md'
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
        <Link to='/' className='text-xl font-bold tracking-wide text-white'>
          Amul Adhikari
        </Link>
        <div className='items-center hidden space-x-6 md:flex'>
          {['home', 'about', 'skills', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className={navLinkClass(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <a
            href='https://github.com/amul-adhikari7?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-400 transition-colors duration-300 hover:text-white'
          >
            <FiGithub /> Projects
          </a>
        </div>
        <button
          className='p-2 text-gray-300 transition duration-300 rounded-md md:hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/5 backdrop-blur-[8px] md:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {['home', 'about', 'skills', 'contact'].map(section => (
              <motion.button
                key={section}
                onClick={() => handleNavigation(section)}
                className='text-2xl font-semibold text-gray-300 transition duration-300 hover:text-white'
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
            <motion.a
              href='https://github.com/amul-adhikari7?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-5 py-3 text-lg font-medium text-gray-300 transition duration-300 hover:text-white'
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub /> Projects
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
