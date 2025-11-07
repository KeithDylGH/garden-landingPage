import React, { useState, useEffect, useRef } from "react";

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const LaunchIcon = () => (
  <svg
    className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.1429 7H7C5.89543 7 5 7.89543 5 9V17C5 18.1046 5.89543 19 7 19H15C16.1046 19 17 18.1046 17 17V13.2143M19 5H15M19 5V9M19 5L9 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const GardenLogoIcon = () => (
  <svg
    className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M44,14H4a2,2,0,0,0-2,2V32a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V16A2,2,0,0,0,44,14ZM17.3,29H14.8l-3-5-.7-1.3h0V29H8.7V19h2.5l3,5,.6,1.3h.1s-.1-1.2-.1-1.6V19h2.5Zm9.1,0H18.7V19h7.6v2H21.2v1.8h4.4v2H21.2v2.1h5.2Zm10.9,0H34.8l-1-4.8c-.2-.8-.4-1.9-.4-1.9h0s-.2,1.1-.3,1.9L32,29H29.6L26.8,19h2.5l1,4.2a20.1,20.1,0,0,1,.5,2.5h0l.5-2.4,1-4.3h2.3l.9,4.3.5,2.4h0l.5-2.5,1-4.2H40Z"></path>
  </svg>
);

const AndroidIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-500 ml-3"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.4472,4.10555 C18.9412,4.35254 19.1414,4.95321 18.8944,5.44719 L17.7199,7.79631 C20.3074,9.6038 22,12.6042 22,16 L22,17 C22,18.1046 21.1046,19 20,19 L4,19 C2.89543,19 2,18.1046 2,17 L2,16 C2,12.6042 3.69259,9.60379 6.28014,7.79631 L5.10558,5.44719 C4.85859,4.95321 5.05881,4.35254 5.55279,4.10555 C6.04677,3.85856 6.64744,4.05878 6.89443,4.55276 L8.028,6.8199 C9.24553,6.29239 10.5886,6 12,6 C13.4114,6 14.7545,6.29239 15.972,6.81991 L17.1056,4.55276 C17.3526,4.05878 17.9532,3.85856 18.4472,4.10555 Z M7.5,12 C6.67157,12 6,12.6716 6,13.5 C6,14.3284 6.67157,15 7.5,15 C8.32843,15 9,14.3284 9,13.5 C9,12.6716 8.32843,12 7.5,12 Z M16.5,12 C15.6716,12 15,12.6716 15,13.5 C15,14.3284 15.6716,15 16.5,15 C17.3284,15 18,14.3284 18,13.5 C18,12.6716 17.3284,12 16.5,12 Z" />
  </svg>
);

const WhatsNew = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="novedades"
      ref={sectionRef}
      className="py-20 sm:py-24 scroll-mt-20"
    >
      <div className="bg-[#020202]/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 gradient-border">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className={`mb-10 text-center`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Novedades y Cambios
            </h2>
            <div className="flex items-center justify-center mt-4">
              <CheckIcon />
              <p className="text-lg text-gray-400">Versión 1.0</p>
              <AndroidIcon />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-6">
              <li
                className={`flex items-start transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <LaunchIcon />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Lanzamiento Oficial
                  </h3>
                  <p className="text-gray-400 mt-1">
                    ¡Garden ya está disponible para todos! Comienza a organizar
                    tu precursorado de una manera más inteligente y visual.
                  </p>
                </div>
              </li>
              <li
                className={`flex items-start transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <GardenLogoIcon />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Logo oficial V1
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Presentamos el nuevo logo de Garden. Un diseño que
                    representa nuestro compromiso con el crecimiento y la
                    simplicidad.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
