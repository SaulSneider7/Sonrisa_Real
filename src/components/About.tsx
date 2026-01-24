
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Nuestro Equipo" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-600 rounded-full -z-0 opacity-10"></div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                    <i className="fa-solid fa-user-doctor"></i>
                  </div>
                  <p className="font-bold text-slate-800">Especialistas Certificados</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                    <i className="fa-solid fa-microscope"></i>
                  </div>
                  <p className="font-bold text-slate-800">Tecnología de Punta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm">Sobre Nosotros</h2>
              <h3 className="text-4xl lg:text-5xl font-outfit font-bold text-slate-900 leading-tight">
                Comprometidos con la excelencia y tu bienestar
              </h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              En Sonrisa Real, no solo tratamos dientes; cuidamos personas. Con más de 15 años de experiencia, hemos creado un espacio donde la salud bucal se encuentra con la comodidad y el lujo.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <i className="fa-solid fa-bullseye text-cyan-600"></i>
                  Misión
                </h4>
                <p className="text-slate-500 text-sm">Proporcionar tratamientos odontológicos de la más alta calidad en un ambiente relajado y profesional.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <i className="fa-solid fa-eye text-cyan-600"></i>
                  Visión
                </h4>
                <p className="text-slate-500 text-sm">Ser referentes en innovación dental, transformando vidas a través de sonrisas saludables y estéticas.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <img 
                  src="https://picsum.photos/id/177/100/100" 
                  alt="Director" 
                  className="w-16 h-16 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="font-bold text-slate-900 text-lg">Dr. Roberto Valdés</p>
                  <p className="text-cyan-600 font-medium">Director Médico & Especialista en Implantología</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
