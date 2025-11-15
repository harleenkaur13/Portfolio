import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:gap-10">
      {/* Heading */}
      <div className="pt-35 h-20 flex justify-center items-end mb-6 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-white">Contact Me</h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-4xl">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-2xl text-zinc-300 font-medium mb-4">
            Let's Connect
          </h2>
          <p className="text-zinc-400 mb-6">
            I'm always excited to collaborate on interesting projects or just
            have a tech chat! Feel free to reach out on any platform below.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-zinc-400">
            <a
              href="mailto:youremail@example.com"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Mail size={26} />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Github size={26} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://instagram.com/yourinstagram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Instagram size={26} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 bg-white/8 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              className="p-3 rounded-md bg-transparent border border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-500 outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              className="p-3 rounded-md bg-transparent border border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              className="p-3 rounded-md bg-transparent border border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-500 outline-none"
            />
            <button
              type="submit"
              className="bg-zinc-800 text-zinc-400 hover:text-zinc-300 transition duration-300 hover:cursor-pointer hover:scale-102 px-6 py-2 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
