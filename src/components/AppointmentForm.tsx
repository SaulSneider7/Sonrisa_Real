
import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simular envío
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-slate-900">
            Da el primer paso hacia la <span className="text-cyan-600">sonrisa de tus sueños.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nuestra clínica se encuentra equipada con la última tecnología diagnóstica. Reserva tu primera consulta de evaluación gratuita hoy mismo.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: 'fa-location-dot', title: 'Visítanos', detail: 'Calle Innovación 123, Ciudad Salud' },
              { icon: 'fa-phone', title: 'Llámanos', detail: '+52 (55) 1234 5678' },
              { icon: 'fa-envelope', title: 'Escríbenos', detail: 'hola@sonrisareal.com' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
                  <p className="font-semibold text-slate-800">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl border border-slate-100">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-scale-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-check text-4xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Enviado!</h3>
              <p className="text-slate-600">Nos pondremos en contacto contigo en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full mb-2">
                <h3 className="text-2xl font-bold text-slate-900">Reserva ahora</h3>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-600">Nombre Completo</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600/20" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-600">Correo Electrónico</label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600/20" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-600">Teléfono</label>
                <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600/20" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-600">Servicio de Interés</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600/20">
                  <option>Selecciona una opción</option>
                  <option>Limpieza General</option>
                  <option>Ortodoncia</option>
                  <option>Implantes</option>
                  <option>Blanqueamiento</option>
                </select>
              </div>
              <div className="col-span-full space-y-1">
                <label className="text-sm font-semibold text-slate-600">Mensaje Adicional</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600/20"></textarea>
              </div>
              <button className="col-span-full bg-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/20">
                Confirmar Solicitud
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
