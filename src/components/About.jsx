import React from 'react'
import { FiCode, FiCoffee, FiGlobe, FiLayers, FiGithub, FiLinkedin } from 'react-icons/fi'
import aboutImage from '../assets/about.png'

const AboutComponent = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Frontend Artisan',
      description: 'Crafting elegant interfaces with React & Tailwind CSS'
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: 'Modern Stack',
      description: 'Leveraging Next.js and cutting-edge web technologies'
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and purposeful solutions'
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: 'UI/UX Focus',
      description: 'Creating pixel-perfect, accessible experiences'
    }
  ]

  return (
    <section id="about" className="relative px-6 py-24 bg-neutral-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -left-48 top-0 opacity-0 animate-slideUpFade [animation-delay:200ms]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -right-48 bottom-0 opacity-0 animate-slideUpFade [animation-delay:400ms]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl opacity-0 animate-slideUpFade [animation-delay:0ms]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Meet The Developer
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 animate-slideUpFade [animation-delay:100ms]"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative group opacity-0 animate-slideInLeft [animation-delay:300ms] px-8 sm:px-12 md:px-16 lg:px-8">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative rounded-full aspect-square overflow-hidden border-2 border-neutral-800/30 bg-neutral-900/50 backdrop-blur-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
              <div className="relative w-full h-full">
                <img
                  src={aboutImage}
                  alt="About"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  loading="lazy"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute px-4 py-2 text-sm font-medium rounded-full shadow-lg top-4 left-4 bg-blue-500/20 backdrop-blur-xl border border-blue-500/20 text-blue-400">
                Hi 
              </div>
            </div>
            <div className="absolute w-40 h-8 -translate-x-1/2 rounded-full -bottom-4 left-1/2 bg-blue-500/10 blur-2xl opacity-60" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 opacity-0 animate-slideInRight [animation-delay:400ms]">
            <div className="space-y-6">
              <div className="relative p-6 rounded-2xl bg-neutral-900/50 backdrop-blur-xl border border-neutral-800/30 transition-all duration-300 hover:bg-neutral-900/60">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
                <div className="relative space-y-4 text-[17px] leading-relaxed text-neutral-300">
                  <p>
                    I'm <span className="font-semibold text-white">Amul</span>, a frontend
                    artisan blending logic with aesthetic. My development philosophy is
                    rooted in elegance  clean interfaces, fluid interactions, and
                    purpose-driven code.
                  </p>
                  <p>
                    My go-to tools are{' '}
                    <span className="font-semibold text-white">React</span>,{' '}
                    <span className="font-semibold text-white">Tailwind CSS</span>, and{' '}
                    <span className="font-semibold text-white">Next.js</span>. I obsess
                    over pixel-perfect design, accessibility, and delightful
                    micro-interactions.
                  </p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-neutral-900/50 backdrop-blur-xl border border-neutral-800/30 transition-all duration-300 hover:bg-neutral-900/60 hover:scale-[1.02] hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />
                    <div className="relative">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:text-purple-400 group-hover:bg-purple-500/10">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-semibold mb-1 text-white">{item.title}</h3>
                      <p className="text-xs text-neutral-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-start gap-4">
                <a
                  href="https://github.com/amul-adhikari7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-neutral-400 transition-all duration-300 border rounded-lg border-neutral-800 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/amul-adhikari-019990280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-neutral-400 transition-all duration-300 border rounded-lg border-neutral-800 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const About = React.memo(AboutComponent)
export default About
