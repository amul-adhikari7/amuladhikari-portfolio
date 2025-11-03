import React, { useState, useRef, useCallback, useMemo } from 'react'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [isSending, setIsSending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState('')
  const formRef = useRef()

  const sendEmail = useCallback(e => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          toast.success('Message sent successfully! ')
          setIsSending(false)
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })
          e.target.reset()
        },
        () => {
          toast.error('Failed to send message. Please try again later. ')
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
        icon: <FiMail size={22} />,
        label: 'Email'
      },
      {
        href: 'https://github.com/amul-adhikari7',
        icon: <FiGithub size={22} />,
        label: 'GitHub'
      },
      {
        href: 'https://linkedin.com/in/amul-adhikari-019990280/',
        icon: <FiLinkedin size={22} />,
        label: 'LinkedIn'
      }
    ],
    []
  )

  return (
    <section
      id='contact'
      className='relative px-6 py-24 bg-neutral-950 text-white overflow-hidden'
    >
      {/* Background accents */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -top-48 left-1/2 -translate-x-1/2 opacity-0 animate-slideUpFade [animation-delay:200ms]' />
        <div className='absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl bottom-0 right-0 opacity-0 animate-slideUpFade [animation-delay:400ms]' />
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
        toastClassName='backdrop-blur-md bg-neutral-900/90 border border-neutral-800'
      />

      <div className='relative z-10 max-w-5xl mx-auto'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <div className='opacity-0 animate-slideUpFade [animation-delay:0ms]'>
            <h2 className='mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
                Let's Create
              </span>
              <br />
              <span className='text-white'>Something Amazing</span>
            </h2>
          </div>

          <p className='max-w-3xl mx-auto text-lg leading-relaxed text-neutral-400 opacity-0 animate-slideUpFade [animation-delay:200ms]'>
            Ready to bring your ideas to life? I'm passionate about
            collaborating on innovative projects and turning concepts into
            reality.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className='max-w-xl mx-auto opacity-0 animate-slideUpFade [animation-delay:400ms]'>
          <div className='relative p-8 overflow-hidden border rounded-2xl bg-neutral-900/50 backdrop-blur-xl border-neutral-800/30'>
            {/* Form background effects */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5' />
            <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent' />

            <div className='relative'>
              <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
                {/* Name Field */}
                <div className='opacity-0 animate-slideInLeft [animation-delay:100ms]'>
                  <div className='relative'>
                    <FiUser
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'name' || formData.name
                          ? 'text-blue-400'
                          : 'text-neutral-500'
                      }`}
                    />
                    <input
                      type='text'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder='Your Name'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border bg-neutral-900/50 border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 hover:border-neutral-700'
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className='opacity-0 animate-slideInRight [animation-delay:200ms]'>
                  <div className='relative'>
                    <FiMail
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'email' || formData.email
                          ? 'text-blue-400'
                          : 'text-neutral-500'
                      }`}
                    />
                    <input
                      type='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder='your.email@example.com'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border bg-neutral-900/50 border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 hover:border-neutral-700'
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className='opacity-0 animate-slideInLeft [animation-delay:300ms]'>
                  <div className='relative'>
                    <FiMessageSquare
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'subject' || formData.subject
                          ? 'text-blue-400'
                          : 'text-neutral-500'
                      }`}
                    />
                    <input
                      type='text'
                      name='subject'
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      placeholder='Subject'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border bg-neutral-900/50 border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 hover:border-neutral-700'
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className='opacity-0 animate-slideInRight [animation-delay:400ms]'>
                  <div className='relative'>
                    <FiMessageSquare
                      className={`absolute left-4 top-6 transition-colors duration-300 ${
                        focusedField === 'message' || formData.message
                          ? 'text-blue-400'
                          : 'text-neutral-500'
                      }`}
                    />
                    <textarea
                      name='message'
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      placeholder='Tell me about your project...'
                      className='w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border resize-none bg-neutral-900/50 border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 hover:border-neutral-700'
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className='opacity-0 animate-slideInUp [animation-delay:500ms]'>
                  <button
                    type='submit'
                    disabled={isSending}
                    className={`group relative w-full py-3 px-8 text-white rounded-xl transition-all duration-300 ${
                      isSending
                        ? 'bg-neutral-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]'
                    }`}
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700' />
                    <span className='relative flex items-center justify-center gap-3'>
                      {isSending ? (
                        <>
                          <div className='w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin' />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className='text-xl' />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className='mt-12 text-center opacity-0 animate-slideUpFade [animation-delay:600ms]'>
          <div className='inline-flex flex-wrap justify-center gap-4'>
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={item.label}
                className='p-3 text-neutral-400 transition-all duration-300 border rounded-lg border-neutral-800 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
