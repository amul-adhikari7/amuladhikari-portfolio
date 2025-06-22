import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiGithub } from 'react-icons/fi'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()

  // Enhanced scroll animations
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  )
  const navBlur = useTransform(scrollY, [0, 50], ['blur(5px)', 'blur(20px)'])
  const navHeight = useTransform(scrollY, [0, 50], ['5rem', '4rem'])
  // Initialize scroll-based animations
  useEffect(() => {
    scrollY.onChange(() => {
      // Additional scroll-based effects can be added here if needed
    })
  }, [scrollY])

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavigation = sectionId => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinkClass = section => `
    relative px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300 rounded-lg
    ${
      activeSection === section
        ? 'text-white bg-white/10 backdrop-blur-sm'
        : 'text-gray-300 hover:text-white hover:bg-white/5'
    }`

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: 20, scale: 0.9 },
    open: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  }

  const hamburgerLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  }

  const hamburgerLine2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }

  const hamburgerLine3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  }

  // Add progress bar state
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'contact', 'footer']
      const sectionElements = sections.map(id => document.getElementById(id))
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      let progressValue = 0
      for (let i = 0; i < sectionElements.length; i++) {
        const el = sectionElements[i]
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + scrollY
          const bottom = top + el.offsetHeight
          if (scrollY + windowHeight / 2 >= top) {
            progressValue = ((i + 1) / sections.length) * 100
          }
        }
      }
      setProgress(progressValue)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: navBlur,
        height: navHeight
      }}
      className='fixed top-0 left-0 z-50 w-full transition-all duration-500 border-b border-white/10'
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    >
      {/* Removed Progress Bar */}

      <motion.div
        className='flex items-center justify-between h-full px-4 mx-auto sm:px-6 max-w-7xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='relative'
        >
          <Link
            to='/'
            className='text-lg font-bold tracking-wide text-transparent transition-colors duration-300 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 sm:text-xl hover:from-blue-300 hover:to-purple-300'
          >
            Amul Adhikari
          </Link>
          <motion.div
            className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400'
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Desktop Navigation with enhanced animations */}
        <div className='items-center hidden space-x-2 lg:flex'>
          {['home', 'about', 'skills', 'contact'].map((section, i) => (
            <motion.button
              key={section}
              onClick={() => handleNavigation(section)}
              className={`${navLinkClass(
                section
              )} group flex flex-col items-center`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 150
              }}
            >
              <span className='relative'>
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* Progress-like bar under nav link */}
                <motion.span
                  className='block h-1 mt-1 transition-all duration-300 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500/80'
                  initial={{ width: 0, opacity: 0.5 }}
                  animate={
                    activeSection === section
                      ? { width: '80%', opacity: 1 }
                      : { width: '0%', opacity: 0.5 }
                  }
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  style={{ margin: '0 auto' }}
                />
              </span>
            </motion.button>
          ))}
          <motion.a
            href='https://github.com/amul-adhikari7?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg sm:text-base hover:text-white hover:bg-white/5'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <FiGithub className='text-lg' /> Projects
          </motion.a>
        </div>

        {/* Enhanced Hamburger Menu Button */}
        <motion.button
          className='relative p-3 text-gray-300 transition duration-300 rounded-xl lg:hidden hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/50'
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className='relative w-6 h-6'>
            <motion.span
              className='absolute top-0 left-0 w-full h-0.5 bg-current rounded-full'
              variants={hamburgerLineVariants}
              animate={isOpen ? 'open' : 'closed'}
            />
            <motion.span
              className='absolute top-2.5 left-0 w-full h-0.5 bg-current rounded-full'
              variants={hamburgerLine2Variants}
              animate={isOpen ? 'open' : 'closed'}
            />
            <motion.span
              className='absolute bottom-0 left-0 w-full h-0.5 bg-current rounded-full'
              variants={hamburgerLine3Variants}
              animate={isOpen ? 'open' : 'closed'}
            />
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay with enhanced animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-40 lg:hidden'
            variants={menuVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            {/* Backdrop with tap to close */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-[32px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <div className='relative flex flex-col h-full'>
              {/* Header with close button */}
              <motion.div
                className='flex items-center justify-between p-4 border-b sm:p-6 border-white/10'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <h2 className='text-xl font-bold text-white sm:text-2xl'>
                  Menu
                </h2>
                <motion.button
                  type='button'
                  onClick={() => setIsOpen(false)}
                  className='z-50 p-3 transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30'
                  style={{ position: 'relative' }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  aria-label='Close menu'
                >
                  <FiX size={24} />
                </motion.button>
              </motion.div>

              {/* Navigation Items */}
              <div className='flex flex-col justify-center flex-1 px-4 py-8 space-y-3 sm:px-8 sm:space-y-4'>
                <div className='w-full max-w-md mx-auto space-y-3 sm:space-y-4'>
                  {['home', 'about', 'skills', 'contact'].map((section, i) => (
                    <motion.button
                      key={section}
                      custom={i}
                      variants={menuItemVariants}
                      initial='closed'
                      animate='open'
                      exit='closed'
                      onClick={() => handleNavigation(section)}
                      className={`
                        relative w-full group overflow-hidden
                        px-6 sm:px-8 py-3 sm:py-4 
                        text-lg sm:text-xl font-bold tracking-wide text-white 
                        transition-all duration-500 
                        rounded-xl sm:rounded-2xl 
                        bg-gradient-to-r from-purple-600/80 via-blue-600/80 to-indigo-600/80
                        hover:from-purple-500/90 hover:via-blue-500/90 hover:to-indigo-500/90
                        border border-white/20 hover:border-white/40
                        shadow-lg hover:shadow-2xl
                        backdrop-blur-sm
                        ${
                          activeSection === section
                            ? 'ring-2 ring-white/50 bg-gradient-to-r from-purple-500/90 via-blue-500/90 to-indigo-500/90'
                            : ''
                        }
                      `}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{
                        scale: 1.02,
                        y: -2
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000' />

                      <span className='relative z-10'>
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>

                      {/* Active indicator */}
                      {activeSection === section && (
                        <motion.div
                          className='absolute transform -translate-y-1/2 right-3 sm:right-4 top-1/2'
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className='w-2 h-2 bg-white rounded-full animate-pulse' />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}

                  {/* Projects button with special styling */}
                  <motion.a
                    custom={4}
                    variants={menuItemVariants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    href='https://github.com/amul-adhikari7?tab=repositories'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative flex items-center justify-center w-full gap-3 px-6 py-3 overflow-hidden text-lg font-bold tracking-wide text-white transition-all duration-500 border shadow-lg group sm:px-8 sm:py-4 sm:text-xl rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600/80 via-teal-600/80 to-cyan-600/80 hover:from-emerald-500/90 hover:via-teal-500/90 hover:to-cyan-500/90 border-white/20 hover:border-white/40 hover:shadow-2xl backdrop-blur-sm'
                    whileTap={{ scale: 0.95 }}
                    whileHover={{
                      scale: 1.02,
                      y: -2
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000' />

                    <span className='relative z-10 flex items-center gap-3'>
                      <FiGithub className='text-xl sm:text-2xl' />
                      Projects
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* Footer with branding */}
              <motion.div
                className='p-4 text-center border-t sm:p-6 border-white/10'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <p className='text-sm text-white/60'>
                  Crafted with ❤️ by Amul Adhikari
                </p>
              </motion.div>
            </div>

            {/* Enhanced decorative elements */}
            <motion.div
              className='absolute w-20 h-20 rounded-full top-16 left-4 sm:w-32 sm:h-32 bg-purple-500/30 blur-2xl'
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, 20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className='absolute w-16 h-16 rounded-full top-1/3 right-4 sm:w-24 sm:h-24 bg-blue-500/30 blur-2xl'
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.8, 0.4],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className='absolute w-24 h-24 rounded-full bottom-20 left-1/4 sm:w-40 sm:h-40 bg-indigo-500/20 blur-3xl'
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-white/40 rounded-full`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`
                }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
