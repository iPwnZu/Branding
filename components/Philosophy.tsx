import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-brand-dark relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    Our Vision
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Visual Side */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute inset-0 bg-brand-secondary/20 z-10 mix-blend-overlay"></div>
                    <img 
                        src="https://ik.imagekit.io/ipwnzu/IMG_0050.JPG?updatedAt=1763676204526" 
                        alt="Vision and Art" 
                        className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded text-xs text-white font-mono border border-white/20">
                        IMG_0050.JPG // VISION
                    </div>
                </div>

                {/* Text Side */}
                <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-xl">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-mono text-brand-accent mb-4 flex items-center gap-3">
                            <span className="text-3xl">🧩</span> Filling Pieces
                        </h3>
                        <p className="text-lg text-slate-300 leading-relaxed font-light">
                            "I don't just build websites; I innovate solutions that captivate, engage, and endure. I am the bridge where creative vision meets technical execution, shaping digital landscapes that are both beautiful to behold and flawlessly functional—a true testament to the synergistic power of design and code."
                        </p>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-700 grid grid-cols-1 gap-6">
                        <div className="flex items-start gap-4">
                             <div className="text-brand-secondary font-mono text-xl font-bold">01.</div>
                             <div>
                                <h4 className="text-white font-bold">Connect</h4>
                                <p className="text-sm text-slate-400">Bridging the gap between cultures and technology.</p>
                             </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="text-brand-accent font-mono text-xl font-bold">02.</div>
                             <div>
                                <h4 className="text-white font-bold">Create</h4>
                                <p className="text-sm text-slate-400">Transcending boundaries through digital creativity.</p>
                             </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="text-white font-mono text-xl font-bold">03.</div>
                             <div>
                                <h4 className="text-white font-bold">Unite</h4>
                                <p className="text-sm text-slate-400">We thank you for being part of our universe.</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <p className="text-xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic">
                    "Bridge the gap, create the world."
                </p>
            </div>
       </div>
    </section>
  );
};