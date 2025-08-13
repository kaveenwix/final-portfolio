import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mx-auto">
            <img
              src="/assets/logoLight.svg"
              alt="Kaveen Wickramasinghe Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-lg font-helvetica font-bold">
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/work" className="hover:text-gray-300 transition-colors">Work</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/kaveen-wickramasinghe-9a892a217/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://instagram.com/kaveenoodle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://github.com/kaveenwix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          <div className="bg-white text-black px-6 py-3 rounded-full">
            <a href="mailto:Kaveenwix@gmail.com" className="font-helvetica font-bold">Kaveenwix@gmail.com</a>
          </div>

          <div className="text-center text-sm font-helvetica">
            <p>Designed and coded by Kaveen W</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
