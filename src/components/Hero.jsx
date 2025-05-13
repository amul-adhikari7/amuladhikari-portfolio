import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import profileImage from "../assets/profile.jpg"; // Add your image to src/assets

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Frontend Developer", "UI/UX Designer", "Creative Coder"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentText.length) {
        setTypedText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTextIndex]);

  return (
    <section
      id="home"
      className="px-6 py-16 md:py-24 flex flex-col md:flex-row items-center bg-gradient-to-br from-emerald-50 to-green-50"
    >
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-emerald-600">Amul</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6 h-12">
          I'm a <span className="text-emerald-500">{typedText}</span>
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg">
          I create beautiful, functional websites and applications with a focus
          on user experience and clean code.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center"
          >
            View My Work <FiArrowRight className="ml-2" />
          </a>
          <a
            href="#contact"
            className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-200 shadow-xl">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x400?text=AJ";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
