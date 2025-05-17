import { FiGithub, FiLinkedin, FiMail, FiFacebook } from "react-icons/fi";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const socialLinks = [
  {
    href: "https://github.com/amul-adhikari7",
    label: "GitHub",
    icon: <FiGithub size={22} />,
    color: "#181717",
    hover: "hover:bg-gray-900 hover:text-white",
  },
  {
    href: "https://www.linkedin.com/in/amul-adhikari-019990280/",
    label: "LinkedIn",
    icon: <FiLinkedin size={22} />,
    color: "#0A66C2",
    hover: "hover:bg-blue-700 hover:text-white",
  },
  {
    href: "https://www.facebook.com/amul.adhikari.37/",
    label: "Facebook",
    icon: <FiFacebook size={22} />,
    color: "#1877F3",
    hover: "hover:bg-blue-600 hover:text-white",
  },
  {
    href: "mailto:amuladhikari7@gmail.com",
    label: "Email",
    icon: <FiMail size={22} />,
    color: "#10b981",
    hover: "hover:bg-emerald-600 hover:text-white",
  },
];

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_v59nyrk",
        "template_nlcctqd",
        e.target,
        "LxUq1SBWsLcVApen5"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setIsSending(false);
          setIsFormOpen(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          setIsSending(false);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-emerald-50 to-green-50 text-gray-800 py-16 px-6 overflow-hidden"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-300 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />
      <ToastContainer />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-emerald-700 animate-fade-in">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in delay-100">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
        <div className="flex justify-center gap-4 mb-10 animate-fade-in delay-200">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`transition-all duration-300 rounded-full p-3 bg-white shadow-md text-emerald-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${link.hover}`}
              style={{ color: link.color }}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <button
          onClick={toggleForm}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 animate-fade-in delay-300"
        >
          {isFormOpen ? "Close Form" : "Contact Me"}
        </button>
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in">
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full relative animate-slide-up">
              <button
                onClick={toggleForm}
                className="absolute top-3 right-3 text-gray-400 hover:text-emerald-600 text-2xl font-bold focus:outline-none"
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-emerald-700">
                Contact Form
              </h3>
              <form onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4 mt-2">
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-700 font-medium transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold shadow hover:bg-emerald-700 transition flex items-center gap-2 disabled:opacity-60"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {/* Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(.4,2,.6,1);
        }
        .animate-slide-up {
          animation: slideUp 0.7s cubic-bezier(.4,2,.6,1);
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
