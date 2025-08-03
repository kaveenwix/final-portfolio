import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="relative z-10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-black text-white rounded-2xl p-6 mb-8 inline-block">
          <h1 className="text-4xl font-archivo font-bold flex items-center">
            <span className="mr-4">Contact</span>
            <Phone size={40} />
          </h1>
        </div>

        {/* Main Contact Section */}
        <div className="bg-black text-white rounded-3xl p-12 text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <img
                src="/images/kaveen/kaveen.png"
                alt="Kaveen Wickramasinghe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-12">
            <div className="space-y-6 text-left max-w-sm mx-auto">
              <Link
                to="/about"
                className="block text-3xl font-helvetica font-bold hover:text-gray-300 transition-colors"
              >
                About
              </Link>
              <Link
                to="/work"
                className="block text-3xl font-helvetica font-bold hover:text-gray-300 transition-colors"
              >
                Work
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={48} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={48} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={48} />
              </a>
            </div>

            {/* Logo */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mx-auto">
              <img
                src="/images/logos/logowhiteversion.png"
                alt="Kaveen Wickramasinghe Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Email Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-helvetica font-bold mb-4">
              my email:
            </h2>
            <div className="bg-white text-black rounded-full px-8 py-4 inline-flex items-center">
              <Mail className="mr-3" size={24} />
              <span className="text-xl font-helvetica font-bold">
                Kaveenwix@gmail.com
              </span>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-2xl font-helvetica font-bold">
            designed and coded by Kaveen W
          </div>
        </div>
      </div>
    </div>
  );
}
