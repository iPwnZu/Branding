import React from 'react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Webové Aplikace",
      icon: "🌐",
      skills: ["React", "Next.js", "Vue.js", "Responsivní design", "E-commerce"],
      desc: "Tvorba moderních, rychlých a škálovatelných webových řešení na míru."
    },
    {
      title: "Mobilní Aplikace",
      icon: "📱",
      skills: ["SwiftUI (iOS)", "Cross-platform", "Mobile UX"],
      desc: "Nativní i hybridní mobilní aplikace s důrazem na perfektní uživatelský zážitek."
    },
    {
      title: "Backend & Data",
      icon: "⚙️",
      skills: ["Node.js", "Python", "API Development", "Databáze"],
      desc: "Robustní serverová řešení, bezpečná API a efektivní správa dat."
    },
    {
      title: "Konzultace & Audit",
      icon: "🛡️",
      skills: ["Technické poradenství", "Code Review", "Optimalizace"],
      desc: "Expertní analýza, zrychlení aplikací a návrh architektury."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-accent font-mono uppercase tracking-widest text-sm">Nabídka spolupráce</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            TopBot.PwnZ<span className="text-brand-accent">™</span> Services
          </h2>
          <div className="max-w-3xl mx-auto bg-slate-900/80 p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
            <p className="text-slate-300 leading-relaxed italic">
              "Profesionální vývojář softwaru se specializací na moderní webové a mobilní aplikace. Nabízím komplexní IT služby včetně vývoje na zakázku, konzultací a technické podpory. Pracuji s nejnovějšími technologiemi jako React, Node.js, Python a Swift. Sídlo ve Vysočině, služby poskytované po celé ČR i remote."
            </p>
            <div className="mt-4 text-brand-secondary font-mono text-sm font-bold text-right">
              — František Kalášek
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-900 rounded-xl border border-slate-800 p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(56,189,248,0.4)] hover:border-brand-accent/50 hover:z-50 z-10"
            >
              {/* Tooltip with subtle fade-in */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-brand-dark/95 backdrop-blur-md text-slate-200 text-xs px-4 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0 pointer-events-none w-64 text-center border border-brand-accent/30 shadow-2xl z-50">
                <span className="block font-bold text-brand-accent mb-1">{service.title}</span>
                {service.desc}
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-brand-dark border-b border-r border-brand-accent/30 rotate-45"></div>
              </div>

              <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 origin-left">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4 h-12 line-clamp-2">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.skills.map((skill) => (
                  <span key={skill} className="text-xs font-mono bg-slate-800 text-brand-secondary px-2 py-1 rounded border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};