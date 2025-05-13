import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetHash, setTargetHash] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

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
    `transition ${
      activeSection === section
        ? "text-emerald-600 font-semibold"
        : "text-gray-700 hover:text-emerald-600"
    }`;

  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-emerald-600">
        Portfolio
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <button
          onClick={() => handleHashLink("home")}
          className={navLinkClass("home")}
        >
          Home
        </button>
        <button
          onClick={() => handleHashLink("about")}
          className={navLinkClass("about")}
        >
          About
        </button>
        <button
          onClick={() => handleHashLink("skills")}
          className={navLinkClass("skills")}
        >
          Skills
        </button>
        <a
          href="https://github.com/amul-adhikari7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-emerald-600 transition"
        >
          Projects
        </a>
        <button
          onClick={() => handleHashLink("contact")}
          className={navLinkClass("contact")}
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleHashLink("home")}
              className={`${navLinkClass("home")} text-left`}
            >
              Home
            </button>
            <button
              onClick={() => handleHashLink("about")}
              className={`${navLinkClass("about")} text-left`}
            >
              About
            </button>
            <button
              onClick={() => handleHashLink("skills")}
              className={`${navLinkClass("skills")} text-left`}
            >
              Skills
            </button>
            <a
              href="https://github.com/amul-adhikari7?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-emerald-600 transition text-left"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <button
              onClick={() => handleHashLink("contact")}
              className={`${navLinkClass("contact")} text-left`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
