import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
        setShowTooltip(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Bubble Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div
          className={`relative transition-all duration-700 ease-out ${
            isCollapsed ? "scale-90" : "scale-100"
          }`}
          onMouseEnter={() => isCollapsed && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Main Bubble Container */}
          <div
            className={`
              bg-cream/80 backdrop-blur-lg 
              rounded-full border border-black/20
              shadow-[0_8px_32px_rgba(0,0,0,0.12)]
              transition-all duration-700 ease-out
              ${isCollapsed ? "px-6 py-3" : "px-8 py-4"}
            `}
          >
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link 
                to="/" 
                className={`flex items-center transition-all duration-700 ${
                  isCollapsed ? "h-8" : "h-10"
                }`}
              >
                <img 
                  src="/assets/logoDark.svg" 
                  alt="Logo" 
                  className="h-full"
                />
              </Link>

              {/* Navigation Links */}
              <div
                className={`
                  flex items-center gap-6 overflow-hidden
                  transition-all duration-700 ease-out
                  ${isCollapsed ? "max-w-0 opacity-0" : "max-w-[500px] opacity-100"}
                `}
              >
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      text-base font-helvetica font-bold 
                      whitespace-nowrap
                      transition-colors duration-300
                      ${
                        isActive(item.href)
                          ? "text-portfolio-blue"
                          : "text-black hover:text-portfolio-blue"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Three Dots Indicator */}
              <div
                className={`
                  flex items-center gap-1.5
                  transition-all duration-700 ease-out
                  ${isCollapsed ? "max-w-[40px] opacity-100" : "max-w-0 opacity-0"}
                `}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
              </div>
            </div>
          </div>

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap animate-fade-in">
              Scroll up to expand
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation - Unchanged */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-cream/90 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center h-11">
              <span className="h-full flex items-center justify-center">
                <img src="/assets/logoDark.svg" alt="Logo" className="h-full" />
              </span>
            </Link>

            <div className="h-11 w-11 grid place-items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-portfolio-blue transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="bg-cream border-t border-black/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-lg font-helvetica font-bold transition-colors ${
                    isActive(item.href)
                      ? "text-portfolio-blue"
                      : "text-black hover:text-portfolio-blue"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}