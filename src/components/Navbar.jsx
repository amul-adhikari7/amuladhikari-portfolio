import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetHash, setTargetHash] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false); // For fade-in
  const location = useLocation();
  const navigate = useNavigate();

  // Fade-in effect on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scrollspy effect
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            threshold: 0.5, // 50% of the section in view
          }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Handle scrolling to target section after navigation
  useEffect(() => {
    if (location.pathname === "/" && targetHash) {
      const element = document.getElementById(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTargetHash(null);
      }
    }
  }, [location, targetHash]);

  const handleHashLink = (hash) => {
    setIsOpen(false); // Close mobile menu

    if (location.pathname === "/") {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setTargetHash(hash);
      navigate("/", { replace: true });
    }
  };

  const navLinkClass = (section) =>
    `relative transition-all duration-300 px-2 py-1
      ${
        activeSection === section
          ? "text-emerald-600 font-semibold"
          : "text-gray-700 hover:text-emerald-600"
      }
      group`;

  // Animated underline for nav links
  const underline = (
    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
  );

  // Animate nav fade-in and slide-down
  return (
    <nav
      className={`px-6 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      } animate-navbar-fade`}
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <Link
        to="/"
        className="text-2xl font-bold text-emerald-600 tracking-tight drop-shadow-sm transition-transform duration-500 hover:scale-110 hover:text-emerald-700 animate-navbar-logo"
      >
        Portfolio
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {["home", "about", "skills", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => handleHashLink(section)}
            className={
              navLinkClass(section) +
              " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 relative overflow-hidden"
            }
          >
            <span className="relative z-10 animate-navbar-link">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
            {underline}
            <span className="absolute left-0 top-0 w-full h-full bg-emerald-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
          </button>
        ))}
        <a
          href="https://github.com/amul-adhikari7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="relative transition-all duration-300 px-2 py-1 text-gray-700 hover:text-emerald-600 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 overflow-hidden"
        >
          <span className="relative z-10 animate-navbar-link">Projects</span>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          <span className="absolute left-0 top-0 w-full h-full bg-emerald-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden text-gray-700 focus:outline-none transition-transform duration-500 ${
          isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
        } animate-navbar-menu`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="transition-transform duration-500">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </span>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 py-8 px-8 transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-10 opacity-0 pointer-events-none"
        } animate-navbar-mobile`}
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="flex flex-col space-y-6 text-lg animate-fade-in">
          {["home", "about", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleHashLink(section)}
              className={`${navLinkClass(
                section
              )} text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 relative overflow-hidden animate-navbar-link`}
            >
              <span className="relative z-10">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              {underline}
              <span className="absolute left-0 top-0 w-full h-full bg-emerald-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
            </button>
          ))}
          <a
            href="https://github.com/amul-adhikari7?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="relative transition-all duration-300 px-2 py-1 text-gray-700 hover:text-emerald-600 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 overflow-hidden animate-navbar-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10">Projects</span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            <span className="absolute left-0 top-0 w-full h-full bg-emerald-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
          </a>
        </div>
      </div>
      <style>{`
        .animate-navbar-fade {
          animation: navbarFadeIn 1.1s cubic-bezier(.4,2,.6,1);
        }
        .animate-navbar-logo {
          animation: navbarLogoPop 1.2s cubic-bezier(.4,2,.6,1);
        }
        .animate-navbar-link {
          animation: navbarLinkFadeIn 1.2s cubic-bezier(.4,2,.6,1);
        }
        .animate-navbar-menu {
          animation: navbarMenuPop 1.2s cubic-bezier(.4,2,.6,1);
        }
        .animate-navbar-mobile {
          animation: navbarMobileSlide 0.7s cubic-bezier(.4,2,.6,1);
        }
        @keyframes navbarFadeIn {
          0% { opacity: 0; transform: translateY(-24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes navbarLogoPop {
          0% { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes navbarLinkFadeIn {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes navbarMenuPop {
          0% { opacity: 0; transform: scale(0.7) rotate(-30deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }
        @keyframes navbarMobileSlide {
          0% { opacity: 0; transform: translateY(-32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
