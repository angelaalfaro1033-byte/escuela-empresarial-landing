import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { SponsorLogos } from './components/SponsorLogos';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import nailImg from "../assets/images/Uñas.jpg";
import makeupImg from "../assets/images/makeup.jpg";
import colorimetriaImg from "./assets/images/colorimetria.jpg";
import barberiaImg from "../assets/images/barberia.jpg";
import barismoImg from "../assets/images/barismo.jpg";
import chocolateImg from "../assets/images/chocolate.jpg";
import panaderiaImg from "../assets/images/panaderia.JPG";
import motosImg from "../assets/images/motos.JPG";
import decoracionImg from "../assets/images/manualidades.jpg";
import { useEffect, useState } from "react";

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  partner: string;
  available: boolean;
  registrationUrl?: string;
}

interface CourseCategory {
  category: string;
  courses: Course[];
}

export default function App() {
  const courseCategories: CourseCategory[] = [
    {
      category: 'E.E. BELLEZA',
      courses: [
        {
          id: 'nail-design',
          title: 'Diseño de Uñas',
          description: 'Aprende las técnicas más modernas de nail art y diseño profesional de uñas con productos de alta calidad.',
          image: nailImg,
          partner: 'Masglo',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
          id: 'makeup',
          title: 'Maquillaje Profesional',
          description: 'Domina las técnicas profesionales de maquillaje para todo tipo de eventos y ocasiones especiales.',
          image: makeupImg,
          partner: 'Masglo',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
          id: 'colorimetry',
          title: 'Colorimetría',
          description: 'Conviértete en experto en teoría del color y técnicas avanzadas de coloración capilar profesional.',
          image: 'https://images.unsplash.com/photo-1617391654484-2894196c2cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBjb2xvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzI0NzU3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
          partner: 'Alfaparf',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
          id: 'barbershop',
          title: 'Barbería',
          description: 'Aprende todas las técnicas de corte clásico y moderno, afeitado profesional y diseño de barba.',
          image: barberiaImg ,
          partner: 'Funse',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
      ],
    },
    {
      category: 'E.E. GASTRONOMÍA',
      courses: [
        {
          id: 'barista',
          title: 'Barismo',
          description: 'Descubre el arte del café: desde la selección del grano hasta el latte art más sofisticado.',
          image: barismoImg ,
          partner: 'Amore e Caffé',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
          id: 'chocolate',
          title: 'Chocolatería',
          description: 'Crea deliciosas obras maestras de chocolate y aprende técnicas de tempering y decoración.',
          image: chocolateImg ,
          partner: 'Mi Dulce Pastel',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
        {
          id: 'bakery',
          title: 'Panadería Artesanal',
          description: 'Domina las técnicas de panadería tradicional y moderna para crear panes de la más alta calidad.',
          image: panaderiaImg,
          partner: 'Tres Castillos',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
      ],
    },
    {
      category: 'E.E. AUTOPARTES',
      courses: [
        {
          id: 'motorcycle',
          title: 'Mantenimiento de Motos',
          description: 'Curso exclusivo para miembros de las Fuerzas Militares. Aprende el mantenimiento integral de motocicletas.',
          image: motosImg,
          partner: 'Honda Motos - Curso exclusivo FFMM',
          available: false,
        },
      ],
    },
    {
      category: 'E.E. DISEÑO – MANUALIDADES',
      courses: [
        {
          id: 'decoration',
          title: 'Decoración Comercial con Globos y Arreglos Florales',
          description: 'Aprende a crear impresionantes decoraciones para eventos con globos y arreglos florales profesionales.',
          image: decoracionImg,
          partner: 'Sempertex - Funse',
          available: true,
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Header />
      <AboutSection />
      
      {/* Courses Section */}
      <section id="cursos" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {courseCategories.map((categoryData, categoryIndex) => (
            <div key={categoryData.category} className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {categoryData.category}
                  </h2>
                </div>
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-600/20 to-transparent rounded-full"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryData.courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    partner={course.partner}
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
