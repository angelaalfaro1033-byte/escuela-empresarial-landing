import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { SponsorLogos } from './components/SponsorLogos';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import nailImg from "../assets/images/Unas.jpg";
import barberiaImg from "../assets/images/barberiax.jpg";
import barismoImg from "../assets/images/barismox.jpg";
import chocolateImg from "../assets/images/chocolatex.jpg";
import panaderiaImg from "../assets/images/panaderiax.jpeg";
import motosImg from "../assets/images/motosx.JPG";
import decoracionImg from "../assets/images/manualidadesx.jpg";
import Pastel from "../assets/images/pastel.png";
import { useEffect, useState } from "react";

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  partner: string;
  schedules: Schedule[];
  available: boolean;
  registrationUrl?: string;
}

interface CourseCategory {
  id: string;
  category: string;
  courses: Course[];
  color: string;
}

type Schedule = {
  city: 'Ibagué' | 'Neiva';
  days: string;
  time: string;
  dates: string;
};

export default function App() {
  const courseCategories: CourseCategory[] = [
    {
      category: 'E.E. BELLEZA',
      color: '#d946ef', 
      id: 'belleza',
      courses: [
        {
          id: 'nail-design',
          title: 'Diseño de Uñas',
          description: 'Aprende las técnicas más modernas de nail art y diseño profesional de uñas con productos de alta calidad.',
          image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          partner: 'Masglo',
          available: true,
          schedules: [
    {
      city: 'Ibagué',
      days: 'Mar – Mié',
      time: '8 AM – 1 PM',
      dates: '14,15,28,29 Abr · 12,13 May'
    },
    {
      city: 'Neiva',
      days: 'Mar – Mié',
      time: '8 AM – 1 PM',
      dates: '21,22 Abr · 6,7,19,20 May'
    }
  ],
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
          id: 'makeup',
          title: 'Maquillaje Profesional',
          description: 'Domina las técnicas profesionales de maquillaje para todo tipo de eventos y ocasiones especiales.',
          image: 'https://images.unsplash.com/photo-1612883695890-f2ab22e65215?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',          
          partner: 'Masglo',
          available: true,
           schedules: [
    {
      city: 'Ibagué',
      days: 'Mar – Mié',
      time: '2 PM – 5 PM',
      dates: '14,15,28,29 Abr · 12,13 May'
    },
    {
      city: 'Neiva',
      days: 'Mar – Mié',
      time: '2 PM – 5 PM',
      dates: '21,22 Abr · 6,7,19,20 May'
    }
  ],
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
          id: 'colorimetry',
          title: 'Colorimetría',
          description: 'Conviértete en experto en teoría del color y técnicas avanzadas de coloración capilar profesional.',
          image: 'https://images.unsplash.com/photo-1617391654484-2894196c2cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBjb2xvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzI0NzU3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
          partner: 'Alfaparf',
          available: true,
          schedules: [
    {
      city: 'Ibagué',
      days: 'Lun – Mar',
      time: '8 AM – 3 PM',
      dates: '27,28,29 Abr · 12,13,14 May'
    },
    {
      city: 'Neiva',
      days: 'Lun – Mar',
      time: '8 AM – 3 PM',
      dates: '14,15 Abr · 6,7,8 May'
    }
  ],
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
       {
  id: 'barbershop',
  title: 'Barbería',
  description: 'Aprende todas las técnicas de corte clásico y moderno, afeitado profesional y diseño de barba.',
  image: barberiaImg,
  partner: 'Funse',
  available: true,
  schedules: [
    {
      city: 'Ibagué',
      days: 'Mar',
      time: '8 AM – 12 PM',
      dates: '14,21,28 Abr · 5,12,19 May'
    },
    {
      city: 'Neiva',
      days: 'Mar',
      time: '8 AM – 12 PM',
      dates: '14,21,28 Abr · 5,12,19 May'
    }
  ],
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
}
      ],
    },
    {
      category: 'E.E. GASTRONOMÍA',
      color: '#92400e',
      id: 'gastronomia',
      courses: [
        {
          id: 'barista',
          title: 'Barismo',
          description: 'Descubre el arte del café: desde la selección del grano hasta el latte art más sofisticado.',
          image: barismoImg ,
          partner: 'Amore e Caffé',
          available: true,
           schedules: [
    {
      city: 'Ibagué',
      days: 'Sábados',
      time: '8–12 / 2–5 PM',
      dates: '11,25 Abr · 9 May'
    },
    {
      city: 'Neiva',
      days: 'Sábados',
      time: '8–12 / 2–5 PM',
      dates: '18 Abr · 2 May · 16 May'
    }
  ],
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
  id: 'chocolate',
  title: 'Chocolatería',
  description: 'Crea deliciosas obras maestras de chocolate y aprende técnicas de tempering y decoración.',
  image: chocolateImg,
  partner: 'Mi Dulce Pastel',
  available: true,
  schedules: [
    {
      city: 'Ibagué',
      days: 'Mar',
      time: '2 PM – 5:30 PM',
      dates: '14,21,28 Abr · 5,12,19 May'
    },
    {
      city: 'Neiva',
      days: 'Mar',
      time: '2 PM – 5:30 PM',
      dates: '14,21,28 Abr · 5,12,19 May'
    }
  ],
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
},
        {
          id: 'bakery',
          title: 'Panadería Artesanal',
          description: 'Domina las técnicas de panadería tradicional y moderna para crear panes de la más alta calidad.',
          image: panaderiaImg,
          partner: 'Tres Castillos',
          available: true,
          schedules: [
    {
      city: 'Ibagué',
      days: 'Por confirmar',
      time: '',
      dates: ''
    },
    {
      city: 'Neiva',
      days: 'Por confirmar',
      time: '',
      dates: ''
    }
  ],
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
      ],
    },
    {
      category: 'E.E. AUTOPARTES',
      color: '#6b7280',
      id: 'autopartes',
      courses: [
        {
          id: 'motorcycle',
          title: 'Mantenimiento de Motos',
          description: 'Curso exclusivo para miembros de las Fuerzas Militares. Aprende el mantenimiento integral de motocicletas.',
          image: motosImg,
          schedules:[],
          partner: 'Honda Motos - Curso exclusivo FFMM',
          available: false,
        },
      ],
    },
    {
      category: 'E.E. DISEÑO – MANUALIDADES',
      color: '#7c3aed',
      id: 'diseno',
      courses: [
        {
  id: 'decoration',
  title: 'Decoración Comercial con Globos y Arreglos Florales',
  description: 'Aprende a crear impresionantes decoraciones para eventos con globos y arreglos florales profesionales.',
  image: decoracionImg,
  partner: 'Sempertex - Funse',
  available: true,
  schedules: [
    {
      city: 'Ibagué',
      days: 'Jueves',
      time: '8 AM – 12 PM',
      dates: '16,23,30 Abr · 7,14,21 May'
    },
    {
      city: 'Neiva',
      days: 'Jueves',
      time: '8 AM – 12 PM',
      dates: '16,23,30 Abr · 7,14,21 May'
    }
  ],
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
},
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Header />
      <AboutSection />
      <StatsSection />
  
      {/* Courses Section */}
      <section id="cursos" className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          {courseCategories.map((categoryData, categoryIndex) => (
           <div key={categoryData.id} id={categoryData.id} className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="h-1 w-12 rounded-full"
                    style={{ backgroundColor: categoryData.color }}
                  ></div>
  
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: categoryData.color }}
                  >
                    {categoryData.category}
                  </h2>
                </div>
  
                <div
                  className="h-0.5 w-full rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${categoryData.color}55, transparent)`
                  }}
                ></div>
              </motion.div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryData.courses.map((course) => (
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    partner={course.partner}
                    schedules={course.schedules}
                    available={course.available}
                    registrationUrl={course.registrationUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  
      <SponsorLogos />
      <Footer />
    </div>
  );
}
