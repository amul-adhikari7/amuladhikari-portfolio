import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiFacebook,
} from "react-icons/fi";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v59nyrk", // Replace with your EmailJS Service ID
        "template_nlcctqd", // Replace with your EmailJS Template ID
        e.target,
        "LxUq1SBWsLcVApen5" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-emerald-50 to-green-50 text-gray-800 py-12 px-6"
    >
      <ToastContainer />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-emerald-600">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
        <button
          onClick={toggleForm}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition mb-8 inline-block"
        >
          Contact Me
        </button>
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white text-gray-800 p-6 rounded-lg max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Contact Form</h3>
              <form onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/amul-adhikari7"
            className="text-gray-600 hover:text-emerald-600 transition"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/amul-adhikari-019990280/"
            className="text-gray-600 hover:text-emerald-600 transition"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/amul.adhikari.37/"
            className="text-gray-600 hover:text-emerald-600 transition"
          >
            <FiFacebook size={20} />
          </a>
          <a
            href="mailto:amuladhikari7@gmail.com"
            className="text-gray-600 hover:text-emerald-600 transition"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
