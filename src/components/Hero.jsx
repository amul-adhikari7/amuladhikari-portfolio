import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { ExternalLink } from 'lucide-react'

/*
  Performance-focused Hero component:
  - Reduced re-renders during typing animation by using refs and updating state only when needed.
  - Lazy-render featured project list via IntersectionObserver.
  - Responsive srcSet for images and width/height to prevent layout shifts.
  - Use will-change hints for animated elements to prefer transform/opacity.
  - useCallback/useMemo to avoid unnecessary re-renders.
*/

const HeroComponent = () => {
  const [typedText, setTypedText] = useState('')
  const texts = useMemo(
    () => ['Frontend Developer', 'UI Designer', 'Web Developer'],
    []
  )

  // Refs to manage typing without causing many re-renders
  const currentIndexRef = useRef(0)
  const currentTextIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const typingTimeoutRef = useRef(null)

  // Optimize typing effect: only update typedText state when slice changes
  useEffect(() => {
    let mounted = true

    const type = () => {
      const current = texts[currentTextIndexRef.current]
      const isDeleting = isDeletingRef.current

      if (!isDeleting && currentIndexRef.current < current.length) {
        currentIndexRef.current += 1
      } else if (isDeleting && currentIndexRef.current > 0) {
        currentIndexRef.current -= 1
      } else {
        // toggle deleting state
        isDeletingRef.current = !isDeletingRef.current
        if (!isDeletingRef.current) {
          currentTextIndexRef.current =
            (currentTextIndexRef.current + 1) % texts.length
        }
      }

      const nextSlice = texts[currentTextIndexRef.current].slice(
        0,
        currentIndexRef.current
      )
      // Only set state when text actually changed (reduces re-renders)
      if (mounted) setTypedText(prev => (prev === nextSlice ? prev : nextSlice))

      // adapt speed depending on deleting/typing
      const speed = isDeletingRef.current ? 50 : 120
      typingTimeoutRef.current = window.setTimeout(type, speed)
    }

    typingTimeoutRef.current = window.setTimeout(type, 500)

    return () => {
      mounted = false
      if (typingTimeoutRef.current)
        window.clearTimeout(typingTimeoutRef.current)
    }
  }, [texts])

  // Projects (memoized) and lazy-rendering via IntersectionObserver
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: 'MindForge  AI-Integrated Blog',
        description:
          'An AI-integrated blogging platform with admin dashboard for content oversight.',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
        githubUrl: 'https://github.com/amul-adhikari7/MindForge',
        liveUrl: '#'
      },
      {
        id: 2,
        title: 'StayEase  Hotel Recommendation',
        description:
          'A MERN stack hotel recommendation system with location-based features.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        githubUrl: 'https://github.com/amul-adhikari7/StayEase.git',
        liveUrl: '#'
      },
      {
        id: 3,
        title: 'Fatafatsewa  E-commerce',
        description:
          'Modern e-commerce platform with product management and user authentication.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
        githubUrl: 'https://github.com/amul-adhikari7/fatafatsewa.git',
        liveUrl: '#'
      }
    ],
    []
  )

  const socialLinks = useMemo(
    () => [
      {
        href: 'https://github.com/amul-adhikari7',
        icon: <FiGithub size={20} />,
        label: 'GitHub'
      },
      {
        href: 'https://linkedin.com/in/amul-adhikari-019990280/',
        icon: <FiLinkedin size={20} />,
        label: 'LinkedIn'
      }
    ],
    []
  )

  // IntersectionObserver to lazy-render projects when visible
  const projectsRef = useRef(null)
  const [projectsVisible, setProjectsVisible] = useState(false)
  useEffect(() => {
    if (!projectsRef.current) return
    const el = projectsRef.current
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setProjectsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Helper to create responsive srcSet for Unsplash images
  const makeSrcSet = useCallback(base => {
    // widths chosen to match the UI thumbnail sizes
    const w400 = `${base}?w=400&h=300&fit=crop&crop=center&fm=webp&q=75 400w`
    const w800 = `${base}?w=800&h=600&fit=crop&crop=center&fm=webp&q=75 800w`
    const w1200 = `${base}?w=1200&h=900&fit=crop&crop=center&fm=webp&q=75 1200w`
    return [w400, w800, w1200].join(', ')
  }, [])

  const contactHref = '#contact'
  const handleContactClick = useCallback(() => {
    // smooth scroll to contact (delegated to browser) - keep minimal
    const el = document.querySelector(contactHref)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <section
      id='home'
      className='relative flex items-center min-h-[75vh] px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-32 bg-neutral-950 overflow-x-hidden'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-50' />
      <div className='hidden sm:block absolute right-0 top-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl' />
      <div className='hidden sm:block absolute left-0 bottom-1/4 w-72 h-72 md:w-96 md:h-96 bg-neutral-800/10 rounded-full blur-3xl' />

      <div className='relative z-10 w-full mx-auto max-w-7xl'>
        <div className='grid gap-12 md:grid-cols-12 md:gap-24'>
          <div className='space-y-8 md:col-span-7'>
            <div className='inline-block px-4 py-2 text-sm tracking-wider text-neutral-400 bg-neutral-900/50 rounded-full border border-neutral-800/50 backdrop-blur-sm'>
              Frontend Developer & UI Engineer
            </div>

            <h1
              className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl'
              style={{ willChange: 'transform, opacity' }}
            >
              Building Digital
              <br />
              <span className='text-blue-400'>Experiences</span>
            </h1>

            <div className='h-16'>
              <h2 className='text-lg font-medium sm:text-xl md:text-3xl text-neutral-300'>
                I am a <span className='font-bold text-white'>{typedText}</span>
                <span className='inline-block w-0.5 h-6 ml-1 bg-blue-400 animate-blink' />
              </h2>
            </div>

            <p className='max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl'>
              Crafting high-performance web applications with modern
              technologies and pixel-perfect attention to detail.
            </p>

            <div className='flex flex-wrap items-center gap-4'>
              <button
                onClick={handleContactClick}
                className='group inline-flex items-center gap-2 px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg font-medium transition-transform duration-300 border text-white border-neutral-800 hover:bg-neutral-800 rounded-lg overflow-hidden relative transform'
                style={{ willChange: 'transform, opacity' }}
              >
                <span className='relative z-10'>Get in Touch</span>
                <FiArrowRight className='relative z-10 transition-transform duration-300 group-hover:translate-x-1' />
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300' />
              </button>

              <div className='flex gap-3'>
                {socialLinks.map(({ href, icon, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='p-2 sm:p-3 transition-transform duration-300 border rounded-lg text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/50 transform hover:scale-105 active:scale-95'
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='md:col-span-5'>
            <div className='relative p-4 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm'>
              <div className='absolute -top-3 left-6'>
                <span className='px-4 py-1 text-xs tracking-wider text-neutral-400 bg-neutral-900 rounded-full border border-neutral-800'>
                  FEATURED PROJECTS
                </span>
              </div>

              <div className='space-y-6 mt-4' ref={projectsRef}>
                {/* Lazy render projects when in view to avoid rendering long lists on mobile */}
                {(projectsVisible ? projects : projects.slice(0, 2)).map(
                  project => (
                    <a
                      key={project.id}
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-lg transition-transform duration-300 hover:bg-neutral-800/30 w-full transform'
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className='w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0'>
                        <img
                          src={`${project.image}?w=800&h=600&fit=crop&crop=center&fm=webp&q=75`}
                          srcSet={makeSrcSet(project.image)}
                          sizes='(max-width: 640px) 64px, (max-width: 768px) 80px, 96px'
                          alt={project.title}
                          width={600}
                          height={400}
                          loading='lazy'
                          decoding='async'
                          fetchPriority='low'
                          className='w-full h-full object-cover'
                        />
                      </div>

                      <div className='flex-1 min-w-0'>
                        <h3 className='text-sm font-medium text-white break-words'>
                          {project.title}
                        </h3>
                        <p className='text-xs text-neutral-400 break-words'>
                          {project.description}
                        </p>
                        <div className='mt-1 flex items-center gap-2'>
                          <FiGithub className='w-3 h-3 text-neutral-500' />
                          {project.liveUrl !== '#' && (
                            <ExternalLink className='w-3 h-3 text-neutral-500' />
                          )}
                        </div>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Hero = React.memo(HeroComponent)
export default Hero
