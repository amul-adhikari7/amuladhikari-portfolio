import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import resumePDF from '../assets/Amul_Adhikari_Resume.pdf'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50 shadow-lg'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="px-6 mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Amul.dev
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="hidden md:flex items-center">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="relative px-4 py-2 text-sm text-neutral-400 transition-all duration-300 hover:text-white group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 w-full h-full rounded-lg bg-neutral-900/0 scale-75 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                  </a>
                ))}
              </div>

              {/* Resume Button - Desktop */}
              <a
                href={resumePDF}
                download="Amul_Adhikari_Resume.pdf"
                className="group relative ml-4 px-4 py-2 text-sm text-white rounded-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-lg translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  <FiDownload className="text-base" />
                  Resume
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-400 transition-colors duration-300 rounded-lg md:hidden hover:text-white hover:bg-neutral-800/50"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl" />

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -top-48 -left-48" />
          <div className="absolute w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -bottom-48 -right-48" />
        </div>

        {/* Mobile Menu Content */}
        <div className="relative flex flex-col items-center justify-center min-h-screen gap-6 p-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={handleNavClick}
              className="relative px-8 py-3 text-lg font-medium text-neutral-400 transition-all duration-300 hover:text-white group"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 w-full h-full rounded-lg bg-neutral-900/0 scale-75 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            </a>
          ))}

          {/* Resume Button - Mobile */}
          <a
            href={resumePDF}
            download="Amul_Adhikari_Resume.pdf"
            onClick={handleNavClick}
            className="group relative mt-4 px-8 py-3 text-lg text-white font-medium rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-xl translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              <FiDownload className="text-xl" />
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
