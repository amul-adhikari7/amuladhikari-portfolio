import React, { useMemo } from 'react'
import { FiCode, FiCoffee, FiHeart } from 'react-icons/fi'
import aboutImage from '../assets/about.webp'

const AboutComponent = () => {
  const traitList = useMemo(
    () => [
      { label: 'Structured' },
      { label: 'Creative' },
      { label: 'Consistent' }
    ],
    []
  )

  return (
    <section
      id='about'
      className='relative px-6 py-28 overflow-hidden bg-[#0B0B12] text-white'
    >
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <div className='absolute w-[420px] h-[420px] bg-[#7028e4]/10 rounded-full blur-[140px] -top-20 -left-20 animate-float' />
        <div className='absolute w-[360px] h-[360px] bg-[#e5b2ca]/10 rounded-full blur-[120px] bottom-0 right-0 animate-float2' />
      </div>

      <div className='max-w-6xl mx-auto'>
        <div className='mb-20 text-center'>
          <h2 className='text-4xl font-extrabold tracking-tight text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-400 to-indigo-500'>
            Meet The Developer
          </h2>
          <div className='w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500'></div>
        </div>

        <div className='grid items-center gap-16 md:grid-cols-2'>
          <div className='relative flex items-center justify-center group'>
            <div className='absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-500 via-violet-400 to-indigo-500 blur-2xl opacity-60 group-hover:opacity-80 group-hover:blur-3xl transition-all duration-500' />
            <div className='relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl group-hover:scale-[1.04] transition-transform duration-500'>
              <div className='relative z-10'>
                <img
                  src={aboutImage}
                  alt='About'
                  className='object-cover w-full h-full pointer-events-none select-none rounded-3xl'
                  loading='lazy'
                  draggable='false'
                />
              </div>
              <div className='absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100 rounded-3xl'></div>
              <div className='absolute px-3 py-1 text-sm font-semibold text-white rounded-full shadow-lg top-4 left-4 bg-fuchsia-600/80 backdrop-blur-md'>
                Hi 👋
              </div>
            </div>
            <div className='absolute w-40 h-8 -translate-x-1/2 rounded-full -bottom-8 left-1/2 bg-fuchsia-500/20 blur-2xl opacity-60 animate-float' />
          </div>

          <div className='space-y-8 text-[17px] leading-relaxed text-gray-300'>
            <div className='space-y-4'>
              <p>
                I'm <span className='font-semibold text-white'>Amul</span>, a
                frontend artisan blending logic with aesthetic. My development
                philosophy is rooted in elegance — clean interfaces, fluid
                interactions, and purpose-driven code.
              </p>
              <p>
                My go-to tools are{' '}
                <span className='font-semibold text-white'>React</span>,{' '}
                <span className='font-semibold text-white'>Tailwind CSS</span>,
                and <span className='font-semibold text-white'>Next.js</span>. I
                obsess over pixel-perfect design, accessibility, and delightful
                micro-interactions.
              </p>
              <p>
                Outside of coding, I explore design systems, refine UI patterns,
                and sip strong coffee while sketching ideas.
              </p>
            </div>

            <div className='grid grid-cols-3 gap-5 pt-6'>
              {traitList.map(({ label }, idx) => (
                <div
                  key={idx}
                  className='flex flex-col items-center justify-center p-5 border border-white/10 rounded-xl bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-md transition duration-300 hover:scale-105 shadow-[0_6px_24px_rgba(255,255,255,0.06)] group'
                >
                  <span className='text-sm font-semibold text-white'>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

const About = React.memo(AboutComponent)
export default About
