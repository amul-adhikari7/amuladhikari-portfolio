import aboutImage from "../assets/about.jpg"; // Add your image to src/assets

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          About <span className="text-emerald-600">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-300 shadow-xl">
              <img
                src={aboutImage}
                alt="About Me"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x400?text=AJ";
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I'm a{" "}
              <span className="text-emerald-600 font-semibold">
                passionate developer
              </span>{" "}
              with over{" "}
              <span className="text-emerald-600 font-semibold">
                a year of self learning and
              </span>{" "}
              creating digital experiences. My journey in tech began when I
              built my first website at 20, and I've been hooked ever since.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I specialize in{" "}
              <span className="text-emerald-600 font-semibold">React</span>,{" "}
              <span className="text-emerald-600 font-semibold">Node.js</span>,
              and modern JavaScript frameworks. I'm always learning new
              technologies to stay at the forefront of web development.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              When I'm not coding, you can find me{" "}
              <span className="text-emerald-600 font-semibold">trekking</span>,
              exploring{" "}
              <span className="text-emerald-600 font-semibold">movies</span>, or
              experimenting with new recipes in the kitchen.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf"; // Accessing the file from the public folder
                  link.download = "resume.pdf";
                  link.click();
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
