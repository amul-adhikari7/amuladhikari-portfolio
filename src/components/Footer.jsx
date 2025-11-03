import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const Footer = React.memo(() => {
  return (
    <footer className='relative bg-neutral-950 text-white py-14 px-6 overflow-hidden border-t border-neutral-800/30'>
      {/* Background accents */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -top-48 left-1/2 -translate-x-1/2 opacity-0 animate-slideUpFade [animation-delay:200ms]' />
        <div className='absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl bottom-0 right-0 opacity-0 animate-slideUpFade [animation-delay:400ms]' />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        {/* Logo & Title */}
        <div className='flex items-center justify-center gap-3 mb-5 opacity-0 animate-slideUpFade [animation-delay:0ms]'>
          <span className='text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
            &lt;/&gt;
          </span>
          <span className='text-lg font-semibold tracking-wide text-white'>
            Designed & Built by Amul Adhikari
          </span>
        </div>

        {/* Tech Stack */}
        <div className='flex justify-center gap-2 mb-3 opacity-0 animate-slideUpFade [animation-delay:200ms]'>
          {['React', 'Tailwind CSS', 'Vite'].map(tech => (
            <span
              key={tech}
              className='px-3 py-1 text-xs tracking-wider text-neutral-300 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-4 mt-4 opacity-0 animate-slideUpFade [animation-delay:400ms]'>
          {[
            {
              href: 'https://github.com/amul-adhikari7',
              icon: <FiGithub size={20} />,
              label: 'GitHub'
            },
            {
              href: 'https://linkedin.com/in/amul-adhikari-019990280/',
              icon: <FiLinkedin size={20} />,
              label: 'LinkedIn'
            },
            {
              href: 'https://twitter.com/adhikariamul7',
              icon: <FiTwitter size={20} />,
              label: 'Twitter'
            }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.label}
              className='p-2.5 text-neutral-400 transition-all duration-300 border rounded-lg border-neutral-800 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95'
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className='mt-6 text-sm text-neutral-500 opacity-0 animate-slideUpFade [animation-delay:600ms]'>
          <span className='inline-flex items-center gap-1.5'>
            <span className='font-medium'>
              {' '}
              {new Date().getFullYear()} Amul Adhikari.
            </span>
            Made with <FiHeart className='text-red-500' size={14} /> and React.
          </span>
        </div>

        {/* Tagline */}
        <div className='mt-3 opacity-0 animate-slideUpFade [animation-delay:800ms]'>
          <span className='text-[10px] text-neutral-500 font-mono tracking-widest'>
            "Striving for pixel-perfect code & meaningful experiences."
          </span>
        </div>
      </div>
    </footer>
  )
})

export default Footer
