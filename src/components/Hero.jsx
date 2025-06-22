import React, { useMemo } from 'react'
import { useState, useEffect } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import profileImage from '../assets/profile.webp'

const HeroComponent = () => {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const texts = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder']
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
        href: 'https://github.com/yourusername',
        icon: <FiGithub size={22} />
      },
      {
        href: 'https://linkedin.com/amul-adhikari-019990280/',
        icon: <FiLinkedin size={22} />
      }
    ],
    []
  )

  return (
    <section
      id='home'
      className='relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden md:py-32 bg-gradient-to-tr from-[#0f0f1a] via-[#0a0a14] to-[#12121f] md:flex-row'
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute w-[480px] h-[300px] bg-[#3b3b59]/20 blur-[90px] rounded-full top-[25%] left-[20%] animate-float' />
        <div className='absolute w-[540px] h-[320px] bg-[#5c4c8d]/20 blur-[100px] rounded-full top-[30%] right-[20%] animate-float2' />
      </div>

      <div className='relative z-10 w-full mx-auto max-w-7xl'>
        <div className='grid items-center gap-20 md:grid-cols-2'>
          <div className='space-y-10'>
            <h1 className='text-5xl font-extrabold tracking-tight text-white md:text-7xl leading-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.25)]'>
              Hi, I'm{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400'>
                Amul
              </span>
            </h1>

            <div className='relative h-16'>
              <h2 className='text-2xl font-semibold text-white md:text-4xl text-primary-200'>
                I'm a{' '}
                <span className='font-bold text-accent-400'>{typedText}</span>
                <span className='inline-block w-1 h-8 ml-1 rounded-sm bg-accent-400 animate-pulse'></span>
              </h2>
            </div>

            <p className='max-w-xl text-lg leading-relaxed text-white md:text-xl text-primary-300'>
              Designing seamless interfaces and engineering rich interactions
              that bring ideas to life — one pixel and line of code at a time.
            </p>

            <div className='flex items-center gap-6'>
              <a
                href='#contact'
                className='inline-flex items-center gap-3 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm'
              >
                Let's Connect <FiArrowRight />
              </a>

              <div className='flex gap-4'>
                {socialLinks.map(({ href, icon }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 bg-[#1e1e2f] hover:bg-[#2d2d44] text-primary-200 hover:text-white rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#2a2a3b] to-[#3f3f5e] blur-[80px] rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-300'></div>
            <div className='relative w-72 h-72 mx-auto rounded-full border-[6px] border-[#28283a] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)] bg-[#1a1a2e]/90 group-hover:scale-[1.05] transition-transform duration-500'>
              <img
                src={profileImage}
                alt='Profile'
                className='w-full h-full object-cover scale-[1.02]'
                loading='lazy'
                draggable='false'
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-float {
          animation: float 9s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 11s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

const Hero = React.memo(HeroComponent)
export default Hero
