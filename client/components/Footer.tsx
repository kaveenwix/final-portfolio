import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
                    {/* Logo */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mx-auto">
            <img
              src="/images/logos/logowhiteversion.png"
              alt="Kaveen Wickramasinghe Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-lg font-helvetica font-bold">
           <link rel="stylesheet" href="pages/works/About.tsx" /> <a href="#about" className="hover:text-gray-300 transition-colors">about</a>
            <a href="#work" className="hover:text-gray-300 transition-colors">work</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">contact</a>
          </div>

          {/* Social Links */}
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
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Email */}
          <div className="bg-white text-black px-6 py-3 rounded-full">
            <span className="font-helvetica font-bold">Kaveenwix@gmail.com</span>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm font-helvetica">
            <p>designed and coded by Kaveen W</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
