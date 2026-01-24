
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-cyan-50/50 rounded-l-[100px] hidden lg:block"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-left">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold text-sm">
            <i className="fa-solid fa-award"></i>
            <span>Excelencia en Cuidado Dental</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-outfit font-bold text-slate-900 leading-tight">
            Tu sonrisa es <br /> 
            <span className="text-cyan-600">nuestra pasión.</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Experimenta el estándar más alto en odontología moderna. Combinamos tecnología de punta con un toque humano para brindarte resultados excepcionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#appointment" 
              className="bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-cyan-600/20"
            >
              Agendar consulta gratis
              <i className="fa-solid fa-calendar-check"></i>
            </a>
            <a 
              href="#services" 
              className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-cyan-600 hover:text-cyan-600 transition-all flex items-center justify-center gap-2"
            >
              Ver servicios
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/id/${i + 20}/50/50`} 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-amber-400 gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => <i key={s} className="fa-solid fa-star text-[10px]"></i>)}
              </div>
              <p className="text-slate-500 font-medium">+2,000 pacientes felices</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-right">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="./hero.webp" 
              alt="Clínica Dental Moderna" 
              className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Floating cards */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-shield-check text-green-600 text-xl"></i>
            </div>
            <div>
              <p className="font-bold text-slate-800">100% Seguro</p>
              <p className="text-xs text-slate-500">Protocolos Certificados</p>
            </div>
          </div>
          
          <div className="absolute top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:flex flex-col gap-2 border border-slate-100 animate-float">
            <p className="text-cyan-600 font-bold text-2xl">98%</p>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Éxito en Implantes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
