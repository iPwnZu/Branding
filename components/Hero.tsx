import React, { useEffect, useState } from 'react';
import { getLocationDetails } from '../services/geminiService';
import { LoadState } from '../types';

export const Hero: React.FC = () => {
  const [locationInfo, setLocationInfo] = useState<string>('');
  const [status, setStatus] = useState<LoadState>(LoadState.IDLE);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const fetchLocation = async () => {
      setStatus(LoadState.LOADING);
      try {
        // We trigger this to show "Grounding" capability immediately on load
        const data = await getLocationDetails();
        if (data && data.text) {
           setLocationInfo(data.text);
        }
        setStatus(LoadState.SUCCESS);
      } catch (e) {
        setStatus(LoadState.ERROR);
      }
    };
    fetchLocation();

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-secondary/10 to-transparent opacity-50 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${offsetY * -0.2}px) scale(${1 + offsetY * 0.0005})` }}
        ></div>
        <div 
            className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block px-3 py-1 border border-slate-700 rounded-full bg-slate-900/50 backdrop-blur-sm animate-fade-in-up">
            <span className="text-brand-accent font-mono text-sm">Hello World 🫵</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Bridge the Gap.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary animate-pulse-slow">
              Create the World.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            I am František Kalášek. Based in the enchanting Moravian region, I don't just build websites; I innovate solutions that captivate and endure.
          </p>
          
          {/* Dynamic Location info with Loading State */}
          {status === LoadState.LOADING && (
             <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm animate-pulse flex items-start gap-3">
                <div className="mt-1 text-slate-600">
                   {/* Map Pin Icon */}
                   <svg className="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="flex-1 space-y-2">
                   <div className="h-3 w-32 bg-slate-600 rounded"></div>
                   <div className="h-3 w-full bg-slate-700 rounded"></div>
                   <div className="h-3 w-5/6 bg-slate-700 rounded"></div>
                </div>
             </div>
          )}

          {status === LoadState.SUCCESS && locationInfo && (
             <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-sm text-slate-300 font-mono animate-fade-in backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 text-brand-secondary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="uppercase tracking-wider text-xs">Located via Google Maps</span>
                </div>
                <p className="italic opacity-80">"{locationInfo.slice(0, 150)}..."</p>
             </div>
          )}

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#services"
              className="relative group overflow-hidden px-8 py-4 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-brand-accent to-brand-secondary shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:shadow-[0_0_60px_rgba(56,189,248,0.8)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ring-1 ring-white/20 hover:ring-white/40 text-center"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#philosophy" 
              className="px-8 py-4 rounded-lg font-bold text-slate-300 border border-slate-600 hover:border-brand-accent hover:text-brand-accent hover:bg-slate-800/50 transition-all duration-300 flex items-center gap-2 hover:pl-6"
            >
              My Philosophy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
          </div>
        </div>

        {/* Image/Visual */}
        <div className="order-1 lg:order-2 flex justify-center relative">
             {/* Abstract decorative frame */}
             <div className="absolute inset-0 border-2 border-brand-accent/30 transform translate-x-4 translate-y-4 rounded-2xl transition-transform duration-300 ease-out" style={{ transform: `translate(${16 + offsetY * 0.02}px, ${16 + offsetY * 0.02}px)` }}></div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-accent/20 max-w-md w-full aspect-[3/4] bg-slate-800 group z-10">
                 {/* Official Profile Picture */}
                <img 
                    src="https://ik.imagekit.io/ipwnzu/IMG_0021(1).PNG?updatedAt=1763676215389" 
                    alt="František Kalášek with Python" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100 filter contrast-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent p-6">
                    <p className="text-white font-mono text-sm tracking-widest uppercase border-l-2 border-brand-accent pl-3 shadow-black drop-shadow-md">
                      TopBot.PwnZ™ Founder
                    </p>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};