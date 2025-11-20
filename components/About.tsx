import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Aesthetic Background: Topography lines meeting Circuit lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" style={{stopColor:'#38bdf8', stopOpacity:1}} />
               <stop offset="100%" style={{stopColor:'#818cf8', stopOpacity:1}} />
             </linearGradient>
           </defs>
           <path d="M0,50 Q250,150 500,50 T1000,50" fill="none" stroke="url(#grad1)" strokeWidth="2" />
           <path d="M0,150 Q250,250 500,150 T1000,150" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.5" />
           <path d="M0,250 Q250,350 500,250 T1000,250" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
             <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-brand-accent"></div>
                <span className="text-brand-accent font-mono uppercase tracking-widest text-sm">The Origin Story</span>
             </div>
             
             <h2 className="text-3xl md:text-4xl font-bold text-white">
               From Moravian Hills to <span className="text-brand-secondary">Digital Peaks</span>
             </h2>

             <div className="prose prose-lg prose-invert text-slate-300">
                <p>
                  My home is nestled in the enchanting <strong className="text-white">Moravian region</strong> of the Czech Republic. Here, rolling hills meet ancient architecture, and a vibrant community seamlessly blends timeless tradition with modern innovation.
                </p>
                <p>
                  It is a place where the wild beauty of nature converges with human ingenuity. This duality—the organic and the structured—sparks endless possibilities for my work in technology and design.
                </p>
             </div>

             <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm hover:border-brand-accent/50 transition-colors">
                   <div className="text-brand-accent mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   </div>
                   <h4 className="font-bold text-white mb-1">Architecture</h4>
                   <p className="text-xs text-slate-400">Timeless structures inspiring solid code foundations.</p>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm hover:border-brand-secondary/50 transition-colors">
                   <div className="text-brand-secondary mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                   </div>
                   <h4 className="font-bold text-white mb-1">Innovation</h4>
                   <p className="text-xs text-slate-400">Modern ingenuity solving complex problems.</p>
                </div>
             </div>
          </div>

          {/* Visual Content - Philosophy Image with Tech Overlay */}
          <div className="relative h-full min-h-[450px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
             {/* Actual Philosophy/Location Image */}
             <img 
                src="https://ik.imagekit.io/ipwnzu/IMG_0004.JPG?updatedAt=1763676203685" 
                alt="Moravian Architecture and Nature" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
             />
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

             {/* Tech Data Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                    <div>
                        <div className="w-16 h-16 bg-slate-900/80 backdrop-blur-md rounded-full border border-brand-accent flex items-center justify-center mb-4 shadow-lg">
                            <span className="text-2xl">🇨🇿</span>
                        </div>
                        <h3 className="text-2xl font-mono font-bold text-white mb-1">Czech Republic</h3>
                        <p className="text-brand-accent font-mono text-sm flex items-center gap-2">
                           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                           Moravia Region / Vysočina
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-xs text-slate-400 font-mono">COORDINATES</div>
                        <div className="text-white font-mono">49.5938° N</div>
                        <div className="text-white font-mono">17.2509° E</div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};