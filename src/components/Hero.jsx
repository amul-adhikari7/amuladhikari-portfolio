import React from 'react'

/*
  Restored Hero component — responsive and matching the recent design.
  Kept logic: typing effect, featured projects (first 2 displayed), social links.
*/
import { useMemo, useState, useEffect } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { ExternalLink } from 'lucide-react'

const HeroComponent = () => {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: 'MindForge  AI-Integrated Blog',
        description:
          'An AI-integrated blogging platform with admin dashboard for content oversight.',
        image:
          'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/MindForge',
        liveUrl: '#'
      },
      {
        id: 2,
        title: 'StayEase  Hotel Recommendation',
        description:
          'A MERN stack hotel recommendation system with location-based features.',
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/StayEase.git',
        liveUrl: '#'
      },
      {
        id: 3,
        title: 'Fatafatsewa  E-commerce',
        description:
          'Modern e-commerce platform with product management and user authentication.',
        image:
          'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/fatafatsewa.git',
        liveUrl: '#'
      }
    ],
    []
  )

  useEffect(() => {
    const texts = ['Frontend Developer', 'UI Designer', 'Web Developer']
    const speed = isDeleting ? 50 : 150
    const current = texts[currentTextIndex]

    const handleTyping = () => {
      if (!isDeleting && currentIndex < current.length) {
        setTypedText(current.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(current.slice(0, currentIndex - 1))
        setCurrentIndex(prev => prev - 1)
      } else {
        setIsDeleting(prev => !prev)
        if (!isDeleting) {
          setCurrentTextIndex(prev => (prev + 1) % texts.length)
        }
      }
    }

    const timeout = setTimeout(handleTyping, speed)
    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, currentTextIndex])

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

  return (
    <section
      id='home'
      className='relative flex items-center min-h-[75vh] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-32 bg-neutral-950 overflow-x-hidden'
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

            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl opacity-0 animate-slideUpFade [animation-delay:400ms]'>
              Building Digital
              <br />
              <span className='text-blue-400'>Experiences</span>
            </h1>

            <div className='h-16 opacity-0 animate-slideUpFade [animation-delay:600ms]'>
              <h2 className='text-lg font-medium sm:text-xl md:text-3xl text-neutral-300'>
                I am a <span className='font-bold text-white'>{typedText}</span>
                <span className='inline-block w-0.5 h-6 ml-1 bg-blue-400 animate-blink' />
              </h2>
            </div>

            <p className='max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl opacity-0 animate-slideUpFade [animation-delay:800ms]'>
              Crafting high-performance web applications with modern
              technologies and pixel-perfect attention to detail.
            </p>

            <div className='flex flex-wrap items-center gap-4 opacity-0 animate-slideUpFade [animation-delay:1000ms]'>
              <a
                href='#contact'
                className='group inline-flex items-center gap-2 px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg font-medium transition-all duration-300 border text-white border-neutral-800 hover:bg-neutral-800 rounded-lg overflow-hidden relative'
              >
                <span className='relative z-10'>Get in Touch</span>
                <FiArrowRight className='relative z-10 transition-transform duration-300 group-hover:translate-x-1' />
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300' />
              </a>

              <div className='flex gap-3'>
                {socialLinks.map(({ href, icon, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='p-2 sm:p-3 transition-all duration-300 border rounded-lg text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/50 hover:scale-105 active:scale-95'
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='md:col-span-5 opacity-0 animate-slideInRight [animation-delay:600ms]'>
            <div className='relative p-4 sm:p-6 rounded-lg border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm'>
              <div className='absolute -top-3 left-6'>
                <span className='px-4 py-1 text-xs tracking-wider text-neutral-400 bg-neutral-900 rounded-full border border-neutral-800'>
                  FEATURED PROJECTS
                </span>
              </div>

              <div className='space-y-6 mt-4'>
                {projects.slice(0, 2).map(project => (
                  <a
                    key={project.id}
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-neutral-800/30 w-full'
                  >
                    <div className='w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0 mb-2 sm:mb-0'>
                      <img
                        src={project.image}
                        alt={project.title}
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
                ))}
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
