import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect for scrolled header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    // Use a short delay to ensure the menu has started closing before scrolling
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 bg-black/30 backdrop-blur-lg" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <a
              href="#"
              onClick={handleScrollToTop}
              className="flex items-center cursor-pointer z-50"
            >
              <h1 className="font-display text-4xl font-bold text-white">
                garden
              </h1>
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Funciones
              </a>
              <a
                href="#novedades"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Novedades
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1zvaZgUQcTGT4McNFQ8Yf0OiHvE5PFq1G/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-white/10 text-white font-medium py-2 px-5 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out"
            >
              Descargar
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="z-50 text-white focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-xl z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <nav className="flex flex-col space-y-8">
            <a
              href="#features"
              onClick={(e) => handleMobileLinkClick(e, "#features")}
              className="text-3xl font-semibold text-gray-200 hover:text-green-400 transition-colors"
            >
              Funciones
            </a>
            <a
              href="#novedades"
              onClick={(e) => handleMobileLinkClick(e, "#novedades")}
              className="text-3xl font-semibold text-gray-200 hover:text-green-400 transition-colors"
            >
              Novedades
            </a>
            <a
              href="https://drive.google.com/file/d/1zvaZgUQcTGT4McNFQ8Yf0OiHvE5PFq1G/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Descargar Garden
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
