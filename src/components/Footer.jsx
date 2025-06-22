import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = React.memo(() => {
  return (
    <footer className='relative bg-[#0b0b17] text-white py-14 px-6 overflow-hidden shadow-inner border-t border-purple-800'>
      <div className='absolute -top-20 left-1/2 -translate-x-1/2 w-[30rem] h-40 bg-purple-900/20 rounded-full blur-3xl animate-float z-0' />
      <div className='absolute bottom-0 right-0 z-0 rounded-full w-44 h-44 bg-pink-700/20 blur-2xl animate-float2' />

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <div
          className='flex items-center justify-center gap-3 mb-5'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <span className='text-3xl font-extrabold tracking-wider text-transparent select-none bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 drop-shadow-lg'>
            &lt;/&gt;
          </span>
          <span className='text-lg font-semibold tracking-wide text-purple-100 select-none'>
            Designed & Built by Amul Adhikari
          </span>
        </div>

        <div
          className='flex justify-center gap-2 mb-3'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          {['React', 'Tailwind CSS', 'Vite'].map(tech => (
            <span
              key={tech}
              className='px-3 py-1 font-mono text-xs tracking-wider text-purple-200 rounded-full shadow bg-slate-800 backdrop-blur-md'
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className='flex justify-center gap-4 mt-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.2 }}
        >
          {[
            {
              href: 'https://github.com/amul-adhikari7',
              icon: <FiGithub size={22} />
            },
            {
              href: 'https://linkedin.com/in/yourusername',
              icon: <FiLinkedin size={22} />
            },
            {
              href: 'https://twitter.com/yourusername',
              icon: <FiTwitter size={22} />
            }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 text-purple-300 transition-all rounded-full shadow bg-slate-800 hover:bg-purple-600 hover:text-white backdrop-blur-sm'
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div
          className='mt-6 text-xs text-purple-400'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ amount: 0.2 }}
        >
          <span className='font-semibold'>
            © {new Date().getFullYear()} Amul Adhikari.
          </span>{' '}
          All rights reserved.
        </div>

        <div
          className='mt-3'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <span className='text-[10px] text-purple-400 font-mono tracking-widest'>
            "Striving for pixel-perfect code & meaningful experiences."
          </span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
})

export default Footer
