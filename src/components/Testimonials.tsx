
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm">Testimonios</h2>
          <h3 className="text-4xl lg:text-5xl font-outfit font-bold text-slate-900">
            Lo que dicen nuestros pacientes
          </h3>
          <p className="text-slate-600 text-lg">
            La satisfacción de quienes confían en nosotros es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative group">
              <div className="absolute top-8 right-10 text-slate-100 text-6xl group-hover:text-cyan-50 transition-colors">
                <i className="fa-solid fa-quote-right"></i>
              </div>
              
              <div className="flex text-amber-400 gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>

              <p className="text-xl text-slate-700 leading-relaxed mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
