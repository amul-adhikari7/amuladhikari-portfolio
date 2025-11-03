import React, { useMemo, useState } from 'react'
import { Github, ExternalLink, Code, Zap, Star, ArrowRight } from 'lucide-react'

const ProjectsComponent = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: 'MindForge  AI-Integrated Blog',
        description:
          'An AI-integrated blogging platform that allows users to add, update, and manage blogs, with an admin dashboard for content oversight.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini-pro-2.5', 'Tailwind CSS', 'REST API', 'Context API'],
        image:
          'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&crop=center',
        githubUrl: '#',
        liveUrl: '#',
        featured: true,
        category: 'Full Stack'
      },
      {
        id: 2,
        title: 'StayEase  Hotel Recommendation',
        description:
          'A full-stack hotel recommendation system built with the MERN stack, offering hotel search, booking, payments, and location-based recommendations.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Context API', 'Dijkstra Algorithm', 'Spatial Mining', 'Haversine Algorithm'],
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/StayEase.git',
        liveUrl: '#',
        featured: true,
        category: 'Full Stack'
      },
      {
        id: 3,
        title: 'Fatafatsewa  E-commerce Platform',
        description:
          'A comprehensive e-commerce platform built with modern web technologies, featuring product management, user authentication, and a responsive shopping experience.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Tailwind CSS'],
        image:
          'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop&crop=center',
        githubUrl: 'https://github.com/amul-adhikari7/fatafatsewa.git',
        liveUrl: '#',
        featured: true,
        category: 'Full Stack'
      }
    ],
    []
  )

  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section
      id='projects'
      className='relative px-6 py-24 bg-neutral-950 text-white overflow-hidden'
    >
      {/* Background accents */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-12 left-12 w-80 h-80 rounded-full bg-blue-500/6 blur-3xl animate-pulse' />
        <div
          className='absolute bottom-12 right-12 w-72 h-72 rounded-full bg-purple-500/6 blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-neutral-300 bg-neutral-900/40 rounded-full border border-neutral-800/40'>
            <Code className='w-4 h-4' />
            <span>Portfolio Showcase</span>
            <Star className='w-4 h-4 text-yellow-400' />
          </div>

          <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
              Featured
            </span>
            <span className='ml-3 text-white'>Projects</span>
          </h2>

          <p className='mx-auto max-w-3xl text-base text-neutral-400'>
            Explore a selection of my work  focused on performance, usability,
            and innovative solutions using modern technologies.
          </p>
        </div>

        {/* Grid */}
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map(project => (
            <article
              key={project.id}
              className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/40 to-neutral-800/30 border border-neutral-800/30 shadow-lg transition-transform duration-300 hover:scale-[1.02]'
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className='relative h-48 overflow-hidden rounded-t-2xl'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                <div className='absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-sm border border-white/10'>
                  {project.category}
                </div>

                {/* Action buttons overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredProject === project.id
                      ? 'opacity-100 bg-black/40'
                      : 'opacity-0'
                  }`}
                >
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-neutral-900/70 border border-white/10 rounded-lg hover:scale-105 transition-transform duration-200'
                  >
                    <Github className='w-4 h-4' />
                    Code
                  </a>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-200'
                    >
                      <ExternalLink className='w-4 h-4' />
                      Live
                    </a>
                  )}
                </div>
              </div>

              <div className='p-5'>
                <h3 className='mb-2 text-lg font-bold text-white line-clamp-1'>
                  {project.title}
                </h3>
                <p className='mb-4 text-sm text-neutral-400 line-clamp-2'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className='px-2 py-1 text-xs font-medium rounded-full bg-neutral-800/40 text-neutral-200 border border-neutral-700/40'
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className='px-2 py-1 text-xs font-medium rounded-full bg-neutral-800/40 text-neutral-200 border border-neutral-700/40'>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className='flex items-center justify-between text-xs text-neutral-400 border-t pt-3'>
                  <span className='flex items-center gap-2'>
                    <Zap className='w-3 h-3' /> Modern Tech
                  </span>
                  <span>#{String(project.id).padStart(2, '0')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-12 text-center'>
          <a
            href='https://github.com/amul-adhikari7'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
          >
            View All Projects
            <ArrowRight className='w-4 h-4' />
          </a>
        </div>
      </div>
    </section>
  )
}

const Projects = React.memo(ProjectsComponent)
export default Projects
