import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Garden. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
