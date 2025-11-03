import { Code, Feather, Layers, Zap, Figma, Database } from 'lucide-react'
import React, { useMemo } from 'react'

const SkillsComponent = () => {
  const skills = useMemo(
    () => [
      {
        name: 'React',
        icon: <Code />,
        level: 90,
        description: 'Expert Level',
        color: 'from-blue-500 to-cyan-400'
      },
      {
        name: 'JavaScript',
        icon: <Zap />,
        level: 85,
        description: 'Expert Level',
        color: 'from-yellow-500 to-amber-400'
      },
      {
        name: 'Node.js',
        icon: <Database />,
        level: 75,
        description: 'Advanced',
        color: 'from-green-500 to-emerald-400'
      },
      {
        name: 'Tailwind CSS',
        icon: <Layers />,
        level: 80,
        description: 'Expert Level',
        color: 'from-blue-400 to-cyan-300'
      },
      {
        name: 'UI/UX Design',
        icon: <Figma />,
        level: 70,
        description: 'Advanced',
        color: 'from-purple-500 to-pink-400'
      },
      {
        name: 'SCSS',
        icon: <Feather />,
        level: 65,
        description: 'Intermediate',
        color: 'from-pink-500 to-rose-400'
      }
    ],
    []
  )

  return (
    <section
      id='skills'
      className='relative px-6 py-24 overflow-hidden bg-neutral-950 text-white'
    >
      {/* Background Effects */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[140px] -top-20 -left-20 animate-float' />
        <div className='absolute w-[360px] h-[360px] bg-purple-500/10 rounded-full blur-[120px] bottom-0 right-0 animate-float2' />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-16 text-center opacity-0 animate-slideUpFade'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
              Technical
            </span>
            <span className='ml-3 text-white'>Expertise</span>
          </h2>
          <p className='max-w-3xl mx-auto text-lg leading-relaxed text-neutral-400 md:text-xl'>
            Crafting digital experiences with precision, passion, and
            cutting-edge technology.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map(({ name, icon, level, description, color }, index) => (
            <div
              key={name}
              className='opacity-0 animate-slideInRight'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className='relative p-6 transition-all duration-300 bg-gradient-to-br from-neutral-900/40 to-neutral-800/30 border border-neutral-800/30 rounded-xl backdrop-blur-sm hover:translate-y-[-2px] hover:shadow-lg group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600' />

                <div className='relative z-10'>
                  <div className='flex items-center justify-between mb-4'>
                    <div
                      className={`text-2xl bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                    >
                      {icon}
                    </div>
                    <span className='text-xl font-bold text-white'>
                      {level}%
                    </span>
                  </div>

                  <div className='mb-4'>
                    <h3 className='text-xl font-bold text-white'>{name}</h3>
                    <p className='mt-1 text-sm text-neutral-400'>
                      {description}
                    </p>
                  </div>

                  <div className='relative h-1.5 overflow-hidden bg-neutral-800 rounded-full'>
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
                      style={{
                        width: '0%',
                        animation: 'progress 1.5s ease-out forwards',
                        animationDelay: `${index * 100 + 500}ms`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to { width: var(--progress, 100%) }
        }
      `}</style>
    </section>
  )
}

const Skills = React.memo(SkillsComponent)
export default Skills
