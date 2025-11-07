import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/30 backdrop-blur-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <a href="#" className="flex items-center cursor-pointer">
             <h1 className="font-display text-4xl font-bold text-white">garden</h1>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Funciones</a>
            <a href="#novedades" className="text-gray-300 hover:text-white transition-colors">Novedades</a>
          </div>
          <a
            href="#"
            className="bg-white/10 text-white font-medium py-2 px-5 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out"
          >
            Descargar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;