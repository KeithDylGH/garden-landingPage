import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhatsNew from "./components/WhatsNew";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-gray-200 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <WhatsNew />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
