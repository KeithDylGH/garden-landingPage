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
              href="https://drive.google.com/file/d/1zvaZgUQcTGT4McNFQ8Yf0OiHvE5PFq1G/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Descargar Garden
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
