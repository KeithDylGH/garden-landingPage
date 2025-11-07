import React, { useState, useEffect } from "react";

const rotatingTexts = [
  "Alcanza tus metas.",
  "Disfruta tu servicio.",
  "Suma horas LDC.",
  "Registra tu tiempo.",
  "Prepara tu servicio.",
  "Toma notas.",
  "Organiza tu servicio.",
  "Alcanza las horas.",
  "Organiza tu tiempo.",
  "Anota tus estudios.",
];

const AndroidIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 ml-2"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.4472,4.10555 C18.9412,4.35254 19.1414,4.95321 18.8944,5.44719 L17.7199,7.79631 C20.3074,9.6038 22,12.6042 22,16 L22,17 C22,18.1046 21.1046,19 20,19 L4,19 C2.89543,19 2,18.1046 2,17 L2,16 C2,12.6042 3.69259,9.60379 6.28014,7.79631 L5.10558,5.44719 C4.85859,4.95321 5.05881,4.35254 5.55279,4.10555 C6.04677,3.85856 6.64744,4.05878 6.89443,4.55276 L8.028,6.8199 C9.24553,6.29239 10.5886,6 12,6 C13.4114,6 14.7545,6.29239 15.972,6.81991 L17.1056,4.55276 C17.3526,4.05878 17.9532,3.85856 18.4472,4.10555 Z M7.5,12 C6.67157,12 6,12.6716 6,13.5 C6,14.3284 6.67157,15 7.5,15 C8.32843,15 9,14.3284 9,13.5 C9,12.6716 8.32843,12 7.5,12 Z M16.5,12 C15.6716,12 15,12.6716 15,13.5 C15,14.3284 15.6716,15 16.5,15 C17.3284,15 18,14.3284 18,13.5 C18,12.6716 17.3284,12 16.5,12 Z" />
  </svg>
);

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Effect for the main hero section fade-in
  useEffect(() => {
    // A tiny delay to ensure the component is mounted before starting the transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Effect for the rotating text animation cycle
  useEffect(() => {
    // Don't start the rotation interval until the main hero section is visible
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTexts.length
      );
    }, 2500); // This duration should match the CSS animation duration

    return () => clearInterval(interval);
  }, [isLoaded]);

  const handleScrollToNovedades = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("novedades");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#020202]/30 backdrop-blur-sm rounded-2xl overflow-hidden gradient-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center text-center z-10">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-all duration-700 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Organiza tu precursorado. <br />
            {/* The container for the rotating text needs a fixed height to prevent layout shifts */}
            <span className="inline-block align-middle h-[72px] lg:h-[77px] overflow-hidden">
              <span
                key={currentTextIndex}
                className="inline-flex items-center justify-center h-full text-green-400 animate-rotate-text"
              >
                {rotatingTexts[currentTextIndex]}
              </span>
            </span>
          </h1>
          <p
            className={`mt-6 text-lg text-gray-300 px-6 sm:px-12 transition-all duration-700 ease-out delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Lleva un registro preciso de tus horas, mantén tu informe al día y{" "}
            <span className="text-green-400 font-semibold">
              enfócate en lo que más importa.
            </span>
          </p>
          <div
            className={`mt-10 flex flex-col items-center space-y-4 transition-all duration-700 ease-out delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://drive.google.com/file/d/1MNoh-vH8jL9QHqqPfNVwS89JW692D__p/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Descargar Garden
              <AndroidIcon />
            </a>
            <a
              href="#novedades"
              onClick={handleScrollToNovedades}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              Versión 1.0
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
