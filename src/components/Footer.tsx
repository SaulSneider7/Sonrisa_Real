
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-cyan-600 p-2 rounded-lg">
                <i className="fa-solid fa-tooth text-white text-xl"></i>
              </div>
              <span className="font-outfit font-bold text-2xl tracking-tight text-slate-800">
                Sonrisa<span className="text-cyan-600">Real</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Dedicados a transformar vidas a través de la salud dental de excelencia y el cuidado personalizado.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white transition-all">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#home" className="hover:text-cyan-600 transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-cyan-600 transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-cyan-600 transition-colors">Nosotros</a></li>
              <li><a href="#appointment" className="hover:text-cyan-600 transition-colors">Agendar Cita</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Horarios</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li className="flex justify-between">
                <span>Lun - Vie:</span>
                <span className="text-slate-900 font-bold">9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span className="text-slate-900 font-bold">10:00 - 15:00</span>
              </li>
              <li className="flex justify-between text-red-500">
                <span>Domingos:</span>
                <span className="font-bold">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <div className="flex flex-col gap-1">
            <p>© 2024 Sonrisa Real. Todos los derechos reservados.</p>
            <p className="text-xs">Elaborado por <a href="https://tu-sitioweb.com" className="text-cyan-600 hover:underline font-bold">tu-sitioweb.com</a></p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
