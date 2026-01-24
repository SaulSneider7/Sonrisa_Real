
import type { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'general',
    title: 'Odontología General',
    description: 'Cuidado preventivo y restaurador para mantener tu salud oral básica.',
    icon: 'fa-tooth',
    longDescription: 'Limpiezas, obturaciones y chequeos regulares para prevenir enfermedades periodontales.'
  },
  {
    id: 'ortho',
    title: 'Ortodoncia Invisible',
    description: 'Alinea tu sonrisa con la tecnología más avanzada y discreta.',
    icon: 'fa-teeth-open',
    longDescription: 'Sistemas de alineadores transparentes diseñados a medida para una corrección cómoda.'
  },
  {
    id: 'implants',
    title: 'Implantes Dentales',
    description: 'Recupera la funcionalidad y estética de tu boca de forma permanente.',
    icon: 'fa-vial',
    longDescription: 'Soluciones duraderas para dientes perdidos con materiales de alta biocompatibilidad.'
  },
  {
    id: 'whitening',
    title: 'Blanqueamiento',
    description: 'Brillo instantáneo para tu sonrisa con resultados profesionales.',
    icon: 'fa-sparkles',
    longDescription: 'Tratamientos de aclaramiento dental seguros y efectivos realizados por expertos.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ana García',
    role: 'Paciente de Ortodoncia',
    content: 'La atención es impecable. El equipo es muy profesional y las instalaciones son de primera clase. Mi sonrisa nunca se vio mejor.',
    rating: 5,
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Paciente de Implantes',
    content: 'Excelente experiencia. Me explicaron todo el proceso con detalle y me sentí muy seguro durante toda la cirugía.',
    rating: 5,
    avatar: 'https://picsum.photos/id/91/100/100'
  }
];
