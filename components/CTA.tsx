import React, { useState, useEffect, useRef } from "react";

const CTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24">
      <div
        className={`relative bg-[#020202]/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center gradient-border overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="relative">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            ¿Listo para Simplificar tu Servicio?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Descarga Garden hoy mismo y únete a los precursores que ya están
            organizando su tiempo de manera más eficiente.
          </p>
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1zvaZgUQcTGT4McNFQ8Yf0OiHvE5PFq1G/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Descargar Garden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
