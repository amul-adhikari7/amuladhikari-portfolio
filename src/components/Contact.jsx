import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const sendEmail = e => {
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
          toast.success('Message sent successfully!')
          setIsSending(false)
          setIsFormOpen(false)
        },
        () => {
          toast.error('Failed to send message. Please try again later.')
          setIsSending(false)
        }
      )
    e.target.reset()
  }

  return (
    <section
      id='contact'
      className='relative px-6 py-28 overflow-hidden text-white bg-[#0b0b17]'
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute rounded-full w-96 h-96 bg-blue-500/10 blur-3xl top-10 left-10 animate-pulse' />
        <div
          className='absolute rounded-full w-80 h-80 bg-purple-500/10 blur-3xl bottom-10 right-10 animate-pulse'
          style={{ animationDelay: '2s' }}
        />
      </div>

      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />

      <div className='relative z-10 max-w-3xl mx-auto text-center'>
        <motion.h2
          className='mb-6 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Collaborate
        </motion.h2>
        <motion.p
          className='max-w-2xl mx-auto mb-12 text-lg text-slate-300'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Got a project idea or just want to connect? I'm always open to
          discussing creative collaborations or development work.
        </motion.p>

        <motion.div
          className='flex justify-center gap-5 mb-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { href: 'mailto:your@email.com', icon: <FiMail size={22} /> },
            {
              href: 'https://github.com/amul-adhikari7',
              icon: <FiGithub size={22} />
            },
            {
              href: 'https://linkedin.com/in/amul-adhikari-019990280/',
              icon: <FiLinkedin size={22} />
            }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 text-purple-300 transition-all duration-300 rounded-full shadow-lg bg-slate-800 hover:bg-purple-600 hover:text-white backdrop-blur-md'
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        <motion.button
          onClick={() => setIsFormOpen(true)}
          className='px-10 py-3 font-semibold text-white transition-all duration-300 shadow-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-2xl backdrop-blur-md'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send a Message
        </motion.button>

        {isFormOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
            <motion.div
              className='relative w-full max-w-lg p-10 mx-4 border border-purple-700 shadow-2xl bg-slate-900 rounded-3xl'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className='absolute text-2xl top-4 right-4 text-slate-400 hover:text-purple-300'
              >
                ×
              </button>
              <h3 className='mb-6 text-3xl font-bold text-purple-300'>
                Get in Touch
              </h3>
              <form onSubmit={sendEmail} className='space-y-6'>
                {['name', 'email', 'message'].map((field, index) => (
                  <motion.div
                    key={field}
                    className='relative'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor={field}
                      className='block mb-2 text-sm font-medium text-purple-200 capitalize'
                    >
                      {field === 'message'
                        ? 'Message'
                        : field.replace(/([A-Z])/g, ' $1')}
                    </label>
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        id={field}
                        required
                        placeholder={`Enter your ${field}`}
                        className='w-full px-5 py-3 text-white placeholder-purple-400 transition-all duration-300 border border-purple-600 bg-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:shadow-md'
                      />
                    ) : (
                      <textarea
                        name={field}
                        id={field}
                        rows={4}
                        required
                        placeholder='Write your message here...'
                        className='w-full px-5 py-3 text-white placeholder-purple-400 transition-all duration-300 border border-purple-600 bg-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:shadow-md'
                      />
                    )}
                  </motion.div>
                ))}
                <motion.button
                  type='submit'
                  disabled={isSending}
                  className='w-full py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl hover:from-purple-500 hover:to-pink-400 backdrop-blur-md'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
