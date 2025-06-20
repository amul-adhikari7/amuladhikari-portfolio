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
import { useEffect, useState } from 'react'
import { motion, useAnimation, useCycle } from 'framer-motion'

const skills = [
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
]

const maxBarHeight = 220

const Skills = () => {
  const [visible, setVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id='skills'
      className='relative px-6 py-24 bg-[#0b0b17] text-white select-none max-w-full overflow-x-hidden'
    >
      {/* Background decorative elements */}
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

      {/* Pre-heading badge */}
      <motion.div
        className='flex items-center justify-center mb-6'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full text-cyan-300 bg-cyan-500/10 border-cyan-500/20 backdrop-blur-sm'>
          <TrendingUp className='w-4 h-4' />
          <span>Technical Expertise</span>
          <Star className='w-4 h-4 text-yellow-400' />
        </div>
      </motion.div>

      {/* Main heading with enhanced animation */}
      <motion.div
        className='mb-8 text-center'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className='relative mb-4 text-6xl font-black tracking-tight md:text-7xl'>
          <span className='text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text animate-gradient-x'>
            Code
          </span>
          <span className='mx-4 text-white'>•</span>
          <span
            className='text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-teal-500 bg-clip-text animate-gradient-x'
            style={{ animationDelay: '1s' }}
          >
            Create
          </span>
          <span className='mx-4 text-white'>•</span>
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
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
      </motion.div>

      {/* Subtitle with enhanced styling */}
      <motion.p
        className='max-w-4xl mx-auto mb-20 text-xl font-light leading-relaxed text-center text-slate-300'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Crafting digital experiences with precision, passion, and cutting-edge
        technology.
        <br />
        <span className='block mt-2 text-lg font-medium text-cyan-300'>
          Where innovation meets execution ⚡
        </span>
      </motion.p>

      {/* Enhanced graph container */}
      <div className='relative flex items-end justify-between max-w-6xl gap-8 px-12 pt-16 pb-12 mx-auto border shadow-2xl border-slate-700/30 rounded-2xl bg-gradient-to-t from-slate-900/20 to-transparent backdrop-blur-sm'>
        {/* Enhanced Y-axis */}
        <div className='absolute top-0 w-px left-12 bottom-12 bg-gradient-to-t from-slate-600 to-slate-400 opacity-40' />

        {/* Grid lines with enhanced styling */}
        {[20, 40, 60, 80, 100].map(val => (
          <div
            key={val}
            className='absolute w-full border-t left-12 border-slate-600 opacity-20'
            style={{
              bottom: `${48 + (val / 100) * maxBarHeight}px`
            }}
          >
            <span className='absolute text-sm font-medium select-none -left-14 text-slate-400 bg-[#0b0b17] px-2 py-1 rounded'>
              {val}%
            </span>
          </div>
        ))}

        {/* Enhanced skill bars */}
        {skills.map(({ name, color, icon, level, shadowColor }, idx) => (
          <motion.div
            key={name}
            className='relative flex flex-col items-center cursor-pointer group max-w-[90px] min-w-[80px]'
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
            {/* Enhanced bar with multiple gradients */}
            <div
              className={`relative w-20 rounded-t-2xl bg-gradient-to-t ${color} shadow-xl ${shadowColor} overflow-hidden`}
              style={{ height: '100%' }}
            >
              {/* Shimmer effect */}
              <div className='absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer' />

              {/* Enhanced glow */}
              <div
                className={`absolute -bottom-2 -left-2 -right-2 h-8 rounded-2xl bg-gradient-to-t ${color} opacity-60 blur-xl transition-all duration-300 ${
                  hoveredSkill === idx ? 'opacity-80 blur-2xl' : ''
                }`}
              />

              {/* Top highlight */}
              <div className='absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-t-2xl' />
            </div>

            {/* Enhanced icon with better glassmorphism */}
            <motion.div
              className={`absolute flex items-center justify-center p-4 transform -translate-x-1/2 rounded-2xl shadow-2xl -top-16 left-1/2 bg-white/10 backdrop-blur-xl border border-white/20 w-16 h-16 ${shadowColor} transition-all duration-300`}
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
                boxShadow: '0 0 30px 8px rgba(255,255,255,0.3)',
                transition: { duration: 0.3 }
              }}
            >
              <div className='text-3xl text-white drop-shadow-lg'>{icon}</div>

              {/* Icon glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${color} opacity-20 blur-xl -z-10`}
              />
            </motion.div>

            {/* Enhanced percentage with animation */}
            <motion.div
              className={`mt-6 text-lg font-bold transition-all duration-300 ${
                hoveredSkill === idx ? 'scale-110 text-white' : 'text-slate-300'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: visible ? 1 : 0, y: 0 }}
              transition={{ delay: idx * 0.15 + 1.8, duration: 0.6 }}
            >
              <span
                className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-black text-xl`}
              >
                {level}%
              </span>
            </motion.div>

            {/* Enhanced skill name */}
            <motion.div
              className={`mt-4 font-bold tracking-wide text-center transition-all duration-300 ${
                hoveredSkill === idx ? 'text-white scale-105' : 'text-slate-200'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.15 + 2, duration: 0.6 }}
            >
              {name}
            </motion.div>

            {/* Hover tooltip */}
            {hoveredSkill === idx && (
              <motion.div
                className='absolute px-3 py-2 text-sm font-medium transform -translate-x-1/2 border rounded-lg -bottom-16 left-1/2 bg-black/80 backdrop-blur-sm border-white/10 whitespace-nowrap'
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

      {/* Enhanced custom styles */}
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

export default Skills
