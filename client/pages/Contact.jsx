import { Helmet } from "react-helmet";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact - Kaveen Wickramasinghe | UI/UX & Graphic Designer
        </title>
        <meta
          name="description"
          content="Get in touch with me, Kaveen Wickramasinghe — UI/UX and graphic designer. Connect me via email at Kaveenwix@gmail.com or through my social media."
        />
        <meta
          name="keywords"
          content="Contact Kaveen Wickramasinghe, UI/UX designer contact, graphic designer hire, design collaboration, portfolio contact"
        />
        <meta name="author" content="Kaveen Wickramasinghe" />

        <meta
          property="og:title"
          content="Contact - Kaveen Wickramasinghe | UI/UX & Graphic Designer"
        />
        <meta
          property="og:description"
          content="Get in touch with me, Kaveen Wickramasinghe — UI/UX and graphic designer. Connect me via email at Kaveenwix@gmail.com or through my social media."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kaveenwickramasinghe.ca/contact"
        />
        <meta property="og:image" content="/images/kaveen/kaveen.png" />
        <meta property="og:image:alt" content="Contact Kaveen Wickramasinghe" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact - Kaveen Wickramasinghe | UI/UX & Graphic Designer"
        />
        <meta
          name="twitter:description"
          content="Get in touch with me, Kaveen Wickramasinghe — UI/UX and graphic designer. Connect me via email at Kaveenwix@gmail.com or through my social media."
        />
        <meta name="twitter:image" content="/images/kaveen/kaveen.png" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kaveenwickramasinghe.ca/contact" />
      </Helmet>
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white rounded-2xl p-6 mb-8 inline-block">
            <h1 className="text-4xl font-archivo font-bold flex items-center">
              <span className="mr-4">Contact</span>
              <Phone size={40} />
            </h1>
          </div>

          <div className="bg-black text-white rounded-3xl p-12 text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src="/images/kaveen/kaveen.png"
                  alt="Kaveen Wickramasinghe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-12">
              <div className="space-y-6 flex flex-col items-center max-w-sm mx-auto">
                <Link
                  to="/about"
                  className="block w-fit text-3xl font-helvetica font-bold hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/work"
                  className="block w-fit text-3xl font-helvetica font-bold hover:text-gray-300 transition-colors"
                >
                  Work
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex justify-center space-x-8 mb-8">
                <a
                  href="https://www.linkedin.com/in/kaveen-wickramasinghe-9a892a217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={48} />
                </a>
                <a
                  href="https://www.instagram.com/kaveenoodle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={48} />
                </a>
                <a
                  href="https://github.com/kaveenwix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={48} />
                </a>
              </div>

              <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mx-auto">
                <img
                  src="/assets/logoLight.svg"
                  alt="Kaveen Wickramasinghe Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-helvetica font-bold mb-4">
                My email:
              </h2>
              <div className="bg-white text-black rounded-full px-8 py-4 inline-flex items-center">
                <Mail className="mr-3" size={24} />
                <span className="text-xl font-helvetica font-bold">
                  Kaveenwix@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
