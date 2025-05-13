import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png"; // Add your images
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Musician Portfolio Website",
      description:
        "A musician portfolio website showcasing music, videos, and events.",
      technologies: ["Reactjs", "tailwindcss", "EmailJS"],
      image: project1,
      githubUrl: "https://github.com/amul-adhikari7/musician-portfolio",
    },
    {
      id: 2,
      title: "Weather App",
      description: "A weather application providing real-time weather updates.",
      technologies: ["Reactjs", "Tailwindcss", "openweathermap API"],
      image: project2,
      githubUrl: "https://github.com/amul-adhikari7/weather-app",
    },
    {
      id: 3,
      title: "Hotel Reservation System",
      description:
        "A hotel reservation system with booking and payment features.",
      technologies: ["Reactjs", "ExpressJs", "Tailwindcss"],
      image: project3,
      githubUrl: "https://github.com/amul-adhikari7/StayEase.git",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured <span className="text-emerald-600">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Project";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center"
                >
                  View Project <FiArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
