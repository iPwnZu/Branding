import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-slate-800 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-brand-accent font-mono">
            TopBot.PwnZ<span className="text-white">™</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-slate-300 hover:text-brand-accent transition-colors font-medium">Home</a>
          <a href="#about" className="text-slate-300 hover:text-brand-accent transition-colors font-medium">About</a>
          <a href="#services" className="text-slate-300 hover:text-brand-accent transition-colors font-medium">Services</a>
          <a href="#philosophy" className="text-slate-300 hover:text-brand-accent transition-colors font-medium">Vision</a>
          <a href="#innovation" className="text-slate-300 hover:text-brand-accent transition-colors font-medium">AI Lab</a>
          <a href="#contact" className="px-4 py-2 rounded-full border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all font-bold">
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};