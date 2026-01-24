
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}
