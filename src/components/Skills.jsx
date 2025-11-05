import React, { useEffect, useState } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaMobileAlt,
  FaBug
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiExpress,
  SiAxios,
  SiMongodb,
  SiMysql,
  SiGoogle,
  SiGithubactions,
  SiVercel,
  SiNetlify
} from 'react-icons/si'

const categoryData = [
  {
    id: 'frameworks',
    title: 'Frameworks',
    skills: [
      { name: 'React', Icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
      { name: 'Express', Icon: SiExpress, color: '#000000' }
    ]
  },
  {
    id: 'api',
    title: 'API Integration',
    skills: [
      { name: 'RESTful APIs', Icon: FaMobileAlt, color: '#9CA3AF' },
      { name: 'Axios', Icon: SiAxios, color: '#5A29FF' },
      { name: 'Fetch API', Icon: SiJavascript, color: '#F7DF1E' }
    ]
  },
  {
    id: 'database',
    title: 'Database',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', Icon: SiMysql, color: '#00758F' }
    ]
  },
  {
    id: 'seo',
    title: 'SEO',
    skills: [
      { name: 'Google Search', Icon: SiGoogle, color: '#4285F4' },
      { name: 'Meta Optimization', Icon: SiGoogle, color: '#4285F4' },
      { name: 'Structured Data', Icon: SiGoogle, color: '#4285F4' },
      { name: 'Lighthouse', Icon: FaBug, color: '#F97316' }
    ]
  },
  {
    id: 'devops',
    title: 'CI/CD & DevOps',
    skills: [
      { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'Vercel', Icon: SiVercel, color: '#000000' },
      { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7' }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    skills: [
      { name: 'Responsive Design', Icon: FaMobileAlt, color: '#60A5FA' },
      { name: 'Cross-Browser', Icon: FaMobileAlt, color: '#60A5FA' },
      { name: 'Debugging', Icon: FaBug, color: '#F97316' },
      { name: 'Version Control', Icon: FaGitAlt, color: '#F05032' }
    ]
  }
]

const Tile = ({ name, Icon, color = '#fff', index = 0, mounted = false }) => {
  const delay = `${Math.min(index * 40, 400)}ms`
  const style = {
    transitionProperty: 'opacity, transform',
    transitionDuration: '360ms',
    transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)',
    transitionDelay: delay,
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(8px)'
  }

  return (
    <div
      className={`group relative flex flex-col items-center p-3`}
      style={style}
    >
      <div className='relative'>
        {/* gradient ring */}
        <div className='rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500'>
          <div
            tabIndex={0}
            role='img'
            aria-label={name}
            className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#0a0a0a] to-[#121212] border border-neutral-800/30 transition-transform duration-300 transform-gpu group-hover:scale-110 group-focus:scale-110 focus:outline-none`}
            style={{ boxShadow: '0 6px 18px rgba(2,6,23,0.5)' }}
          >
            {React.createElement(Icon, {
              style: { color },
              className: 'text-xl sm:text-2xl'
            })}
          </div>
        </div>

        {/* subtle glow (visual only) */}
        <span className='pointer-events-none absolute inset-0 rounded-full blur-[10px] opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity duration-300' />
      </div>

      {/* name always shown under icon */}
      <div className='mt-2 text-sm text-neutral-200 text-center w-full px-1'>
        {name}
      </div>
    </div>
  )
}

const SkillsComponent = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id='skills'
      className='relative px-6 py-16 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
              Technical
            </span>{' '}
            <span className='text-white'>Expertise</span>
          </h2>
          <p className='mt-3 text-neutral-400'>
            Modern stack, tooling and workflows I use to build production apps.
          </p>
        </div>

        <div className='space-y-10'>
          {categoryData.map(category => (
            <div key={category.id}>
              <h3 className='mb-4 text-lg font-semibold text-neutral-300'>
                {category.title}
              </h3>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                {category.skills.map((s, idx) => (
                  <Tile
                    key={`${category.id}-${s.name}-${idx}`}
                    name={s.name}
                    Icon={s.Icon}
                    color={s.color}
                    index={idx}
                    mounted={mounted}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Skills = React.memo(SkillsComponent)
export default Skills
