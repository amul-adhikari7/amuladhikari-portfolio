import React, { useMemo } from 'react'
import { Github, ExternalLink, Code, Zap, Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectsComponent = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: 'Musician Portfolio Website',
        description:
          'A stunning musician portfolio showcasing music, videos, and events with seamless user experience.',
        technologies: ['React.js', 'Tailwind CSS', 'EmailJS'],
        image:
          'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/musician-portfolio',
        liveUrl: '#',
        featured: true,
        category: 'Frontend'
      },
      {
        id: 2,
        title: 'Weather App',
        description:
          'Real-time weather application with beautiful UI and comprehensive weather data visualization.',
        technologies: ['React.js', 'Tailwind CSS', 'OpenWeatherMap API'],
        image:
          'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/weather-app',
        liveUrl: '#',
        featured: false,
        category: 'Full Stack'
      },
      {
        id: 3,
        title: 'Hotel Reservation System',
        description:
          'Complete hotel booking platform with advanced reservation management and payment integration.',
        technologies: ['React.js', 'Express.js', 'Tailwind CSS'],
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/StayEase.git',
        liveUrl: '#',
        featured: true,
        category: 'Full Stack'
      }
    ],
    []
  )
  const [hoveredProject, setHoveredProject] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section
      id='projects'
      className='relative px-6 py-24 bg-[#0b0b17] text-white overflow-hidden'
    >
      {/* Enhanced background effects */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute rounded-full top-10 left-20 w-96 h-96 bg-blue-500/5 blur-3xl animate-pulse'></div>
        <div
          className='absolute rounded-full bottom-20 right-20 w-80 h-80 bg-purple-500/5 blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Enhanced header section */}
        <motion.div
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          {/* Pre-heading badge */}
          <motion.div
            className='flex items-center justify-center mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2 }}
          >
            <div className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-300 border rounded-full bg-purple-500/10 border-purple-500/20 backdrop-blur-sm'>
              <Code className='w-4 h-4' />
              <span>Portfolio Showcase</span>
              <Star className='w-4 h-4 text-yellow-400' />
            </div>
          </motion.div>

          {/* Main heading */}
          <h2 className='mb-6 text-5xl font-black tracking-tight md:text-6xl'>
            <span className='text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text'>
              Featured
            </span>
            <span className='mx-4 text-white'>Projects</span>
          </h2>

          {/* Subtitle */}
          <p className='max-w-3xl mx-auto text-xl font-light leading-relaxed text-slate-300'>
            Explore my latest creations where innovation meets functionality.
            <br />
            <span className='block mt-2 text-lg font-medium text-purple-300'>
              Building tomorrow's web experiences today ✨
            </span>
          </p>

          {/* Decorative line */}
          <motion.div
            className='h-1 mx-auto mt-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60'
            style={{ width: '200px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ amount: 0.2 }}
          />
        </motion.div>

        {/* Enhanced projects grid */}
        <motion.div
          className='grid gap-8 px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-2 md:px-0'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className='relative group'
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.2 }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className='absolute z-20 px-3 py-1 text-xs font-bold text-black rounded-full shadow-lg -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse'>
                  <Star className='inline w-3 h-3 mr-1' />
                  Featured
                </div>
              )}

              <div className='relative h-full flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/30 shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:scale-[1.02] hover:border-purple-500/30 min-h-[420px] sm:min-h-[400px]'>
                {/* Image section with enhanced overlay */}
                <div className='relative h-48 overflow-hidden sm:h-56'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='object-cover w-full h-48 rounded-2xl sm:h-56 md:h-48 lg:h-40 xl:h-48 shadow-lg transition-transform duration-300 group-hover:scale-105'
                    loading='lazy'
                    draggable='false'
                  />

                  {/* Gradient overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                  {/* Category badge */}
                  <div className='absolute px-3 py-1 text-xs font-semibold text-white border rounded-full top-4 left-4 bg-black/60 backdrop-blur-sm border-white/20'>
                    {project.category}
                  </div>

                  {/* Action buttons overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${
                      hoveredProject === project.id
                        ? 'opacity-100 bg-black/40'
                        : 'opacity-0'
                    }`}
                  >
                    <motion.a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 border rounded-lg bg-black/80 backdrop-blur-sm border-white/20 hover:bg-white/10 hover:scale-105'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className='w-4 h-4' />
                      Code
                    </motion.a>

                    {project.liveUrl && project.liveUrl !== '#' && (
                      <motion.a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/30'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className='w-4 h-4' />
                        Live
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content section */}
                <div className='flex flex-col flex-1 p-4 sm:p-6'>
                  <h3 className='mb-3 text-lg font-bold text-white transition-colors duration-300 sm:text-xl group-hover:text-purple-300'>
                    {project.title}
                  </h3>

                  <p className='flex-1 mb-4 text-xs leading-relaxed sm:text-sm text-slate-300'>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='px-2 py-1 text-xs font-medium transition-all duration-300 border rounded-full sm:px-3 sm:py-1 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 border-slate-600/50 hover:from-purple-700 hover:to-pink-700 hover:text-white'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project stats or additional info */}
                  <div className='flex flex-col items-start justify-between gap-2 pt-3 text-xs border-t sm:flex-row sm:items-center text-slate-400 border-slate-700/50 sm:gap-0'>
                    <span className='flex items-center gap-1'>
                      <Zap className='w-3 h-3' />
                      Modern Tech
                    </span>
                    <span>#{project.id.toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA section */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ amount: 0.2 }}
        >
          <motion.a
            href='/projects'
            className='inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border shadow-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl hover:shadow-purple-500/30 hover:scale-105 backdrop-blur-sm border-white/10'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
          </motion.a>

          <p className='mt-4 text-sm text-slate-400'>
            Discover more amazing projects in my portfolio
          </p>
        </motion.div>
      </div>

      {/* Enhanced custom styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}

const Projects = React.memo(ProjectsComponent)
export default Projects
