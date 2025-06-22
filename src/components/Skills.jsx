import {
  Code,
  Feather,
  Layers,
  Zap,
  Figma,
  Database,
  Star,
  TrendingUp
} from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const SkillsComponent = () => {
  const skills = useMemo(
    () => [
      {
        name: 'React',
        color: 'from-sky-400 to-blue-500',
        icon: <Code />,
        level: 90,
        shadowColor: 'shadow-sky-500/30'
      },
      {
        name: 'JavaScript',
        color: 'from-yellow-300 to-yellow-500',
        icon: <Zap />,
        level: 85,
        shadowColor: 'shadow-yellow-500/30'
      },
      {
        name: 'Node.js',
        color: 'from-green-400 to-emerald-500',
        icon: <Database />,
        level: 75,
        shadowColor: 'shadow-emerald-500/30'
      },
      {
        name: 'Tailwind CSS',
        color: 'from-cyan-400 to-teal-400',
        icon: <Layers />,
        level: 80,
        shadowColor: 'shadow-cyan-500/30'
      },
      {
        name: 'UI/UX Design',
        color: 'from-purple-400 to-pink-400',
        icon: <Figma />,
        level: 70,
        shadowColor: 'shadow-purple-500/30'
      },
      {
        name: 'SCSS',
        color: 'from-pink-400 to-rose-400',
        icon: <Feather />,
        level: 65,
        shadowColor: 'shadow-pink-500/30'
      }
    ],
    []
  )

  const maxBarHeight = 220
  const [visible, setVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id='skills'
      className='relative px-6 py-24 bg-[#0b0b17] text-white select-none overflow-hidden'
    >
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute rounded-full top-20 left-10 w-72 h-72 bg-blue-500/5 blur-3xl animate-pulse'></div>
        <div
          className='absolute rounded-full bottom-20 right-10 w-80 h-80 bg-purple-500/5 blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-cyan-500/3 blur-3xl animate-pulse'
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <motion.div
        className='flex items-center justify-center mb-6'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        <div className='flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full text-cyan-300 bg-cyan-500/10 border-cyan-500/20 backdrop-blur-sm'>
          <TrendingUp className='w-4 h-4' />
          <span>Technical Expertise</span>
          <Star className='w-4 h-4 text-yellow-400' />
        </div>
      </motion.div>

      <motion.div
        className='mb-8 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.2 }}
      >
        <h2 className='relative flex flex-wrap items-center justify-center mb-4 text-3xl font-black tracking-tight break-words whitespace-pre-line xs:text-4xl sm:text-5xl md:text-6xl gap-x-2 gap-y-2'>
          <span className='text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text animate-gradient-x'>
            Code
          </span>
          <span className='mx-2 text-2xl text-white sm:text-3xl md:text-4xl'>
            •
          </span>
          <span
            className='text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-teal-500 bg-clip-text animate-gradient-x'
            style={{ animationDelay: '1s' }}
          >
            Create
          </span>
          <span className='mx-2 text-2xl text-white sm:text-3xl md:text-4xl'>
            •
          </span>
          <span
            className='text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text animate-gradient-x'
            style={{ animationDelay: '2s' }}
          >
            Conquer
          </span>
        </h2>

        <motion.div
          className='h-1 mx-auto mb-6 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60'
          style={{ width: '200px' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ amount: 0.2 }}
        />
      </motion.div>

      <motion.p
        className='max-w-4xl mx-auto mb-20 text-lg font-light leading-relaxed text-center md:text-xl text-slate-300'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Crafting digital experiences with precision, passion, and cutting-edge
        technology.
        <br />
        <span className='block mt-2 text-base font-medium md:text-lg text-cyan-300'>
          Where innovation meets execution ⚡
        </span>
      </motion.p>

      <div
        className='relative flex flex-wrap justify-center gap-6 px-2 pt-12 pb-8 mx-auto overflow-x-auto border shadow-2xl md:px-12 border-slate-700/30 rounded-2xl bg-gradient-to-t from-slate-900/20 to-transparent backdrop-blur-sm max-w-7xl sm:gap-6 sm:pt-16 sm:pb-12 md:gap-8 md:pt-16 md:pb-12 lg:gap-10 lg:pt-16 lg:pb-12 scrollbar-thin scrollbar-thumb-slate-700/40 scrollbar-track-transparent '
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className='flex justify-center w-full min-w-0 gap-4 flex-nowrap sm:gap-6 md:gap-8 lg:gap-10 md:justify-start lg:justify-center'>
          {skills.map(({ name, color, icon, level, shadowColor }, idx) => (
            <motion.div
              key={name}
              className='relative flex flex-col items-center w-24 min-w-[5.5rem] sm:w-28 sm:min-w-[7rem] md:w-32 md:min-w-[8rem] lg:w-36 lg:min-w-[9rem] cursor-pointer group'
              initial={{ height: 0 }}
              animate={{ height: visible ? (level / 100) * maxBarHeight : 0 }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: idx * 0.15
              }}
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`relative w-full rounded-t-2xl bg-gradient-to-t ${color} shadow-xl ${shadowColor} overflow-hidden`}
                style={{ height: '100%' }}
              >
                <div className='absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer' />
                <div
                  className={`absolute -bottom-2 -left-2 -right-2 h-8 rounded-2xl bg-gradient-to-t ${color} opacity-60 blur-xl transition-all duration-300 ${
                    hoveredSkill === idx ? 'opacity-80 blur-2xl' : ''
                  }`}
                />
                <div className='absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-t-2xl' />
              </div>

              <motion.div
                className={`absolute flex items-center justify-center p-4 transform -translate-x-1/2 rounded-2xl shadow-2xl -top-16 left-1/2 bg-white/10 backdrop-blur-xl border border-white/20 w-14 h-14 sm:w-16 sm:h-16 ${shadowColor} transition-all duration-300`}
                initial={{ y: -20, opacity: 0, rotate: -180 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  delay: idx * 0.15 + 1.5,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 120,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
              >
                <div className='text-2xl text-white sm:text-3xl drop-shadow-lg'>
                  {icon}
                </div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${color} opacity-20 blur-xl -z-10`}
                />
              </motion.div>

              <motion.div
                className={`mt-6 text-sm sm:text-lg font-bold transition-all duration-300 ${
                  hoveredSkill === idx
                    ? 'scale-110 text-white'
                    : 'text-slate-300'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: visible ? 1 : 0, y: 0 }}
                transition={{ delay: idx * 0.15 + 1.8, duration: 0.6 }}
              >
                <span
                  className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-black`}
                >
                  {level}%
                </span>
              </motion.div>

              <motion.div
                className={`mt-3 sm:mt-4 text-xs sm:text-sm font-bold tracking-wide text-center transition-all duration-300 ${
                  hoveredSkill === idx
                    ? 'text-white scale-105'
                    : 'text-slate-200'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 + 2, duration: 0.6 }}
              >
                {name}
              </motion.div>

              {hoveredSkill === idx && (
                <motion.div
                  className='absolute px-3 py-2 text-xs font-medium transform -translate-x-1/2 border rounded-lg -bottom-16 left-1/2 bg-black/80 backdrop-blur-sm border-white/10 whitespace-nowrap'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {level >= 80
                    ? 'Expert Level'
                    : level >= 70
                    ? 'Advanced'
                    : level >= 60
                    ? 'Intermediate'
                    : 'Developing'}
                  <div
                    className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-t ${color} rotate-45`}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) skewX(-12deg);
          }
          100% {
            transform: translateX(250%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

const Skills = React.memo(SkillsComponent)
export default Skills
