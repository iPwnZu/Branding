import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Philosophy } from './components/Philosophy';
import { GeminiDemo } from './components/GeminiDemo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <GeminiDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;