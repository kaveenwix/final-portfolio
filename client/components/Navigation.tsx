import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Bubble Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div
          className={`relative bg-cream/80 backdrop-blur-lg rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/20 transition-all duration-700 ease-out ${
            isScrolled ? "px-6 py-3 scale-90" : "px-8 py-4 scale-100"
          }`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {/* Logo/Home - Always visible */}
            <Link
              to="/"
              className={`transition-all duration-500 ${
                isScrolled ? "h-8" : "h-10"
              }`}
            >
              <img 
                src="/assets/logoDark.svg" 
                alt="Logo" 
                className="h-full"
              />
            </Link>

            {/* Navigation Links - Collapse on scroll */}
            <div
              className={`flex items-center gap-6 transition-all duration-700 overflow-hidden ${
                isScrolled ? "opacity-0 max-w-0" : "opacity-100 max-w-[500px]"
              }`}
            >
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-helvetica font-bold text-base whitespace-nowrap transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-portfolio-blue"
                      : "text-black hover:text-portfolio-blue"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Collapsed state indicator (three dots) */}
            <div
              className={`flex items-center gap-1.5 transition-all duration-700 ease-out ${
                isScrolled ? "max-w-[40px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between gap-4">
            <Link to="/" className="h-10">
              <img 
                src="/assets/logoDark.svg" 
                alt="Logo" 
                className="h-full"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full transition-all duration-300 hover:bg-black/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 text-black ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                  size={20}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 text-black ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                  size={20}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Hover tooltip when collapsed (desktop only) */}
        {isScrolled && (
          <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap animate-fade-in">
              Scroll up to expand
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-cream z-50 shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-black/10">
            <span className="text-2xl font-archivo font-bold text-black">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-black/5 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={24} className="text-black" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-4 px-4 rounded-xl font-helvetica font-bold text-lg transition-all duration-300 transform animate-slide-in-right ${
                    location.pathname === link.path
                      ? "bg-black text-white scale-105"
                      : "text-black hover:bg-black/5 hover:translate-x-2"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-black/10">
            <p className="text-sm text-black/60 font-helvetica">
              © 2024 Kaveen Wickramasinghe
            </p>
          </div>
        </div>
      </div>
    </>
  );
}