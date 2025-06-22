import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi'
import React, { useState, useRef, useCallback, useMemo } from 'react'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'

const Contact = React.memo(() => {
  const [isSending, setIsSending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState('')
  const formRef = useRef()

  const sendEmail = useCallback(e => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        'service_v59nyrk',
        'template_nlcctqd',
        e.target,
        'LxUq1SBWsLcVApen5'
      )
      .then(
        () => {
          toast.success('Message sent successfully! 🚀')
          setIsSending(false)
          setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
          })
          e.target.reset()
        },
        () => {
          toast.error('Failed to send message. Please try again later. 😔')
          setIsSending(false)
        }
      )
  }, [])

  const handleInputChange = useCallback(e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }, [])

  const socialLinks = useMemo(
    () => [
      {
        href: 'mailto:your@email.com',
        icon: <FiMail size={24} />,
        label: 'Email',
        color: 'from-red-500 to-pink-500'
      },
      {
        href: 'https://github.com/amul-adhikari7',
        icon: <FiGithub size={24} />,
        label: 'GitHub',
        color: 'from-gray-600 to-gray-800'
      },
      {
        href: 'https://linkedin.com/in/amul-adhikari-019990280/',
        icon: <FiLinkedin size={24} />,
        label: 'LinkedIn',
        color: 'from-blue-600 to-blue-800'
      }
    ],
    []
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // faster stagger
        delayChildren: 0.08 // less delay
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 }, // less y
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: 'easeOut' } // faster
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: 24 }, // less x
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.38, ease: 'easeOut' } // faster
    }
  }

  return (
    <section
      id='contact'
      className='relative px-4 py-20 overflow-hidden text-white sm:px-6 sm:py-28 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900'
    >
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute rounded-full w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 blur-3xl top-10 left-10 animate-pulse' />
        <div
          className='absolute w-64 h-64 rounded-full sm:w-80 sm:h-80 bg-blue-500/10 blur-3xl bottom-10 right-10 animate-pulse'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute w-48 h-48 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-2xl top-1/2 left-1/2 animate-pulse'
          style={{ animationDelay: '4s' }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 rounded-full bg-purple-400/30'
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <ToastContainer
        position='top-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        toastClassName='backdrop-blur-md bg-slate-800/90 border border-purple-500/30'
      />

      <motion.div
        className='relative z-10 mx-auto max-w-7xl'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
      >
        {/* Header Section */}
        <div className='mb-16 text-center'>
          <motion.div variants={itemVariants}>
            <h2 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                Let's Create
              </span>
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
                Something Amazing
              </span>
            </h2>
          </motion.div>

          <motion.p
            className='max-w-3xl mx-auto mb-12 text-lg leading-relaxed sm:text-xl text-slate-300'
            variants={itemVariants}
          >
            Ready to bring your ideas to life? I'm passionate about
            collaborating on innovative projects and turning concepts into
            reality. Let's connect and build something extraordinary together.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className='flex justify-center gap-4 mb-12 sm:gap-6'
            variants={itemVariants}
          >
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`group relative p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700' />
                <div className='relative text-white'>{item.icon}</div>
                <span className='absolute px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 rounded opacity-0 -bottom-8 left-1/2 bg-black/80 group-hover:opacity-100'>
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div className='max-w-xl mx-auto' variants={formVariants}>
          <div className='relative p-4 overflow-hidden border shadow-2xl sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 via-purple-800/20 to-slate-800/50 backdrop-blur-xl border-purple-500/30'>
            {/* Form background effects */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5' />
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500' />

            <div className='relative z-10'>
              <motion.div
                className='mb-6 text-center'
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.08 }}
              >
                <h3 className='mb-2 text-xl font-bold text-transparent sm:text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
                  Send Me a Message
                </h3>
                <p className='text-sm text-slate-400'>
                  I'll get back to you within 24 hours
                </p>
              </motion.div>

              <form ref={formRef} onSubmit={sendEmail} className='space-y-4'>
                {/* Name Field */}
                <motion.div
                  className='relative group'
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.04 }}
                >
                  <div className='relative'>
                    <FiUser
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 ${
                        focusedField === 'name' || formData.name
                          ? 'text-purple-400'
                          : ''
                      }`}
                    />
                    <input
                      type='text'
                      name='name'
                      id='name'
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder='Your Name'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border placeholder-slate-400 bg-slate-800/80 border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-slate-500 backdrop-blur-sm'
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className='relative group'
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.06 }}
                >
                  <div className='relative'>
                    <FiMail
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 ${
                        focusedField === 'email' || formData.email
                          ? 'text-purple-400'
                          : ''
                      }`}
                    />
                    <input
                      type='email'
                      name='email'
                      id='email'
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder='your.email@example.com'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border placeholder-slate-400 bg-slate-800/80 border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-slate-500 backdrop-blur-sm'
                    />
                  </div>
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  className='relative group'
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.08 }}
                >
                  <div className='relative'>
                    <FiMessageSquare
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 ${
                        focusedField === 'subject' || formData.subject
                          ? 'text-purple-400'
                          : ''
                      }`}
                    />
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      placeholder='Subject'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border placeholder-slate-400 bg-slate-800/80 border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-slate-500 backdrop-blur-sm'
                    />
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  className='relative group'
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.1 }}
                >
                  <div className='relative'>
                    <FiUser
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 ${
                        focusedField === 'phone' || formData.phone
                          ? 'text-purple-400'
                          : ''
                      }`}
                    />
                    <input
                      type='tel'
                      name='phone'
                      id='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      placeholder='Phone (optional)'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border placeholder-slate-400 bg-slate-800/80 border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-slate-500 backdrop-blur-sm'
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className='relative group'
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.12 }}
                >
                  <div className='relative'>
                    <FiMessageSquare
                      className={`absolute left-4 top-6 text-white transition-colors duration-300 ${
                        focusedField === 'message' || formData.message
                          ? 'text-purple-400'
                          : ''
                      }`}
                    />
                    <textarea
                      name='message'
                      id='message'
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      placeholder='Tell me about your project, ideas, or just say hello...'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border resize-none placeholder-slate-400 bg-slate-800/80 border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-slate-500 backdrop-blur-sm'
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  disabled={isSending}
                  className={`group relative w-full py-3 px-8 font-semibold text-white rounded-xl transition-all duration-300 overflow-hidden ${
                    isSending
                      ? 'bg-slate-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 shadow-lg hover:shadow-2xl'
                  }`}
                  whileHover={!isSending ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.14 }}
                >
                  {!isSending && (
                    <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700' />
                  )}

                  <span className='relative flex items-center justify-center gap-3'>
                    {isSending ? (
                      <>
                        <motion.div
                          className='w-5 h-5 border-2 rounded-full border-white/30 border-t-white'
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FiSend className='text-xl' />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              {/* Bottom decoration */}
              <motion.div
                className='mt-8 text-center'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.22, delay: 0.18 }}
              >
                <p className='text-sm text-slate-400'>
                  Response time: Usually within 24 hours ⚡
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default Contact
