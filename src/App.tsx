
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add custom animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fade-in-left {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fade-in-right {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fade-in-down {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes scale-in {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
      .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
      .animate-fade-in-down { animation: fade-in-down 0.4s ease-out forwards; }
      .animate-float { animation: float 5s ease-in-out infinite; }
      .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
      
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default App;
