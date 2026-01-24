
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm">Nuestra Experiencia</h2>
          <h3 className="text-4xl lg:text-5xl font-outfit font-bold text-slate-900">
            Servicios integrales para cada necesidad
          </h3>
          <p className="text-slate-600 text-lg">
            Ofrecemos una gama completa de tratamientos dentales utilizando los métodos más innovadores del sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-slate-50 p-8 rounded-[32px] border border-transparent hover:border-cyan-200 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-cyan-600 transition-colors duration-500">
                <i className={`fa-solid ${service.icon} text-2xl text-cyan-600 group-hover:text-white`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="text-cyan-600 font-bold flex items-center gap-2 group/btn">
                Saber más 
                <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
