
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#appointment' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-600 p-2 rounded-lg">
            <i className="fa-solid fa-tooth text-white text-xl"></i>
          </div>
          <span className="font-outfit font-bold text-2xl tracking-tight text-slate-800">
            Sonrisa<span className="text-cyan-600">Real</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-cyan-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="bg-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/20 active:scale-95"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4 animate-fade-in-down shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="bg-cyan-600 text-white text-center px-6 py-3 rounded-full font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Cita
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
