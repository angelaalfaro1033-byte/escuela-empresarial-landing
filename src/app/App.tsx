import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { SponsorLogos } from './components/SponsorLogos';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import barismoImg from "../assets/images/barismox.jpg";
import chocolateImg from "../assets/images/chocolatex.jpg";
import panaderiaImg from "../assets/images/panaderiax.jpeg";
import Pastel from "../assets/images/pastel.png";
import { useEffect, useState } from "react";
import {  BellezaBackground,  GastronomiaBackground,  AutopartesBackground,  DisenoBackground } from './components/CategoryBackgrounds';
import { useActiveSection } from './hooks/useActiveSection';
import { Sparkles } from 'lucide-react';

interface Course {
  id: string
  title: string
  description: string
  image: string
  partner: string
  available: boolean
  sessions?: CourseSession[]
    registrationUrl?: string;
}

interface CourseCategory {
  id: string;
  category: string;
  courses: Course[];
  color: string;
}

type CourseSession = {
  session: number
  date: string
  day: string
  topic: string
  time: string
  classroom: string
  partner: string
  city: 'Ibagué' | 'Neiva';
}

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
          sessions: [
  {
session:0,
date:"8 Abril",
day:"Miércoles",
topic:"Inducción / Lanzamiento programa",
time:"8:00 AM",
classroom:"Auditorio Principal",
partner:"Camara de comercio de Ibagué",
city:"Ibagué"
},

{
session:1,
date:"14 Abril",
day:"Martes",
topic:"Clase práctica 1: Automaquillaje Masglo",
time:"2:00 PM - 5:00 PM",
classroom:"Salón 5A - Centro Empresarial",
partner:"Masglo Professional",
city:"Ibagué"

},

{
session:2,
date:"15 Abril",
day:"Miércoles",
topic:"Clase práctica 2: Automaquillaje Masglo",
time:"2:00 PM - 5:00 PM",
classroom:"Salón 5A - Centro Empresarial",
partner:"Masglo Professional",
city:"Ibagué"

},

{
session:3,
date:"17 Abril",
day:"Viernes",
topic:"Costos y formalización",
time:"8:00 AM - 12:00 PM",
classroom:"Salones UT",
partner:"UT",
city:"Ibagué"

},

{
session:4,
date:"20 Abril",
day:"Lunes",
topic:"Conceptos de mercadeo y manejo de redes sociales",
time:"8:00 AM - 12:00 PM",
classroom:"Salones UT",
partner:"UT",
city:"Ibagué"

},

{
session:5,
date:"28 Abril",
day:"Martes",
topic:"Clase práctica 3: Automaquillaje Masglo",
time:"2:00 PM - 5:00 PM",
classroom:"Salón 5A - Centro Empresarial",
partner:"Masglo Professional",
city:"Ibagué"

},

{
session:6,
date:"29 Abril",
day:"Miércoles",
topic:"Clase práctica 4: Automaquillaje Masglo",
time:"2:00 PM - 5:00 PM",
classroom:"Salón 5A - Centro Empresarial",
partner:"Masglo Professional",
city:"Ibagué"

},

{
session:7,
date:"4 Mayo",
day:"Jueves",
topic:"Servicio al cliente",
time:"8:00 AM - 10:00 AM",
classroom:"Salones UT",
partner:"UT",
city:"Ibagué"

},

{
session:8,
date:"9 Mayo",
day:"Sábado",
topic:"Curso de bioseguridad para establecimientos del sector belleza",
time:"8:00 AM - 12:00 PM",
classroom:"Universidad del Tolima",
partner:"Gobernación del Tolima",
city:"Ibagué"

},

{
session:9,
date:"11 Mayo",
day:"Lunes",
topic:"Finanzas para emprendedores",
time:"8:00 AM - 12:00 PM",
classroom:"Salones UT",
partner:"UT",
city:"Ibagué"

},

{
session:10,
date:"12 Mayo",
day:"Martes",
topic:"Clase práctica 5: Automaquillaje Masglo",
time:"2:00 PM - 5:00 PM",
classroom:"Salón 5A - Centro Empresarial",
partner:"Masglo Professional",
city:"Ibagué"

},

{
session:11,
date:"13 Mayo",
day:"Miércoles",
topic:"Clase práctica 6: Automaquillaje Masglo",
time:"2:00 PM - 5:00 PM",
classroom:"Salón 5A - Centro Empresarial",
partner:"Masglo Professional",
city:"Ibagué"

},

{
session:12,
date:"25 Mayo",
day:"Lunes",
topic:"Modelo de negocio Canvas",
time:"8:00 AM - 12:00 PM",
classroom:"Salones UT",
partner:"UT",
city:"Ibagué"

},

{
session:13,
date:"3 Junio",
day:"Miércoles",
topic:"Clausura de graduación",
time:"9:00 AM",
classroom:"Universidad del Tolima",
partner:"Gobernación del Tolima",
city:"Ibagué"

},
  {
    session: 0,
    date: "13 Abril",
    day: "Viernes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 1,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 2,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 3,
    date: "21 Abril",
    day: "Martes",
    topic: "Clase práctica 1: Manicura by Masglo",
    time: "08:00 AM - 1:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 4,
    date: "22 Abril",
    day: "Miércoles",
    topic: "Clase práctica 2: Decoración de uñas básico",
    time: "08:00 AM - 1:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 5,
    date: "4 Mayo",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "8:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Neiva"
  },
  {
    session: 6,
    date: "6 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 3: Esmaltado semipermanente",
    time: "08:00 AM - 1:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 7,
    date: "7 Mayo",
    day: "Jueves",
    topic: "Clase práctica 4: Nail Art semipermanente Gel Polish",
    time: "08:00 AM - 1:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 8,
    date: "11 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 9,
    date: "19 Mayo",
    day: "Martes",
    topic: "Clase práctica 5: Acrygel Dual System estructuras",
    time: "08:00 AM - 1:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 10,
    date: "20 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 6: Builder Gel para estructuras",
    time: "08:00 AM - 1:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 11,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 12,
    date: "4 Junio",
    day: "Jueves",
    topic: "Clausura de graduación",
    time: "2:00 PM",
    classroom: "Por definir",
    partner: "Universidad del Tolima",
    city: "Neiva"
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
          sessions: [
             {
    session: 0,
    date: "8 Abril",
    day: "Miércoles",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "14 Abril",
    day: "Martes",
    topic: "Clase práctica 1: Manicura by Masglo",
    time: "8:00 AM - 1:00 PM",
    classroom: "Salón 5A - Centro Empresarial",
    partner: "Masglo Professional",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "15 Abril",
    day: "Miércoles",
    topic: "Clase práctica 2: Decoración de uñas básico",
    time: "8:00 AM - 1:00 PM",
    classroom: "Salón 5A - Centro Empresarial",
    partner: "Masglo Professional",
    city: "Ibagué"
  },
  {
    session: 3,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 4,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "28 Abril",
    day: "Martes",
    topic: "Clase práctica 3: Esmaltado semipermanente y técnicas de diseño",
    time: "8:00 AM - 1:00 PM",
    classroom: "Salón 5A - Centro Empresarial",
    partner: "Masglo Professional",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "29 Abril",
    day: "Miércoles",
    topic: "Clase práctica 4: Nail Art semipermanente Gel Polish",
    time: "8:00 AM - 1:00 PM",
    classroom: "Salón 5A - Centro Empresarial",
    partner: "Masglo Professional",
    city: "Ibagué"
  },
  {
    session: 7,
    date: "4 Mayo",
    day: "Jueves",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "8:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Ibagué"
  },
  {
    session: 8,
    date: "9 Mayo",
    day: "Sábado",
    topic: "Servicio al cliente",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "11 Mayo",
    day: "Lunes",
    topic: "Curso de bioseguridad para establecimientos del sector belleza",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Gobernación del Tolima",
    city: "Ibagué"
  },
  {
    session: 10,
    date: "12 Mayo",
    day: "Martes",
    topic: "Clase práctica 5: Acrygel Dual System estructuras europeas",
    time: "8:00 AM - 1:00 PM",
    classroom: "Salón 5A - Centro Empresarial",
    partner: "Masglo Professional",
    city: "Ibagué"
  },
  {
    session: 11,
    date: "13 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 6: Builder Gel para estructuras comerciales",
    time: "8:00 AM - 1:00 PM",
    classroom: "Salón 5A - Centro Empresarial",
    partner: "Masglo Professional",
    city: "Ibagué"
  },
  {
    session: 12,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 13,
    date: "3 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
{
    session: 0,
    date: "13 Abril",
    day: "Miércoles",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 1,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 2,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 3,
    date: "21 Abril",
    day: "Martes",
    topic: "Clase práctica 1: Automaquillaje Masglo Cosmetics",
    time: "02:00 PM - 6:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 4,
    date: "22 Abril",
    day: "Miércoles",
    topic: "Clase práctica 2: Automaquillaje Masglo Cosmetics",
    time: "02:00 PM - 6:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 5,
    date: "4 Mayo",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "8:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Neiva"
  },
  {
    session: 6,
    date: "6 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 3: Automaquillaje Masglo Cosmetics",
    time: "02:00 PM - 6:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 7,
    date: "7 Mayo",
    day: "Jueves",
    topic: "Clase práctica 4: Automaquillaje Masglo Cosmetics",
    time: "02:00 PM - 6:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 8,
    date: "11 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 9,
    date: "19 Mayo",
    day: "Martes",
    topic: "Clase práctica 5: Automaquillaje Masglo Cosmetics",
    time: "02:00 PM - 6:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 10,
    date: "20 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 6: Automaquillaje Masglo Cosmetics",
    time: "02:00 PM - 6:00 PM",
    classroom: "Salones UT",
    partner: "Masglo Professional",
    city: "Neiva"
  },
  {
    session: 11,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 12,
    date: "4 Junio",
    day: "Jueves",
    topic: "Clausura de graduación",
    time: "2:00 PM",
    classroom: "Por definir",
    partner: "Universidad del Tolima",
    city: "Neiva"
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
          sessions: [
    {
    session: 0,
    date: "8 Abril",
    day: "Miércoles",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "20 Abril",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "8:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Ibagué"
  },
  {
    session: 3,
    date: "27 Abril",
    day: "Lunes",
    topic: "Clase práctica 1: Introducción al color",
    time: "08:00 AM - 3:00 PM",
    classroom: "Salón 3B - Centro Empresarial",
    partner: "Alfaparf",
    city: "Ibagué"
  },
  {
    session: 4,
    date: "28 Abril",
    day: "Martes",
    topic: "Clase práctica 2: Teoría de los colores",
    time: "08:00 AM - 3:00 PM",
    classroom: "Salón 3B - Centro Empresarial",
    partner: "Alfaparf",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "29 Abril",
    day: "Miércoles",
    topic: "Clase práctica 3: Boceto de autor",
    time: "08:00 AM - 3:00 PM",
    classroom: "Salón 3B - Centro Empresarial",
    partner: "Alfaparf",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "4 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 7,
    date: "9 Mayo",
    day: "Sábado",
    topic: "Curso de bioseguridad para establecimientos del sector belleza",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Gobernación del Tolima",
    city: "Ibagué"
  },
  {
    session: 8,
    date: "11 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "12 Mayo",
    day: "Martes",
    topic: "Clase práctica 4: Sombras y luces (papel aluminio)",
    time: "08:00 AM - 3:00 PM",
    classroom: "Salón 3B - Centro Empresarial",
    partner: "Alfaparf",
    city: "Ibagué"
  },
  {
    session: 10,
    date: "13 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 5: Sombras y luces (balayage)",
    time: "08:00 AM - 3:00 PM",
    classroom: "Salón 3B - Centro Empresarial",
    partner: "Alfaparf",
    city: "Ibagué"
  },
  {
    session: 11,
    date: "14 Mayo",
    day: "Jueves",
    topic: "Clase práctica 6: Rebel Art",
    time: "08:00 AM - 3:00 PM",
    classroom: "Salón 5A - Centro Empresarial",
    partner: "Alfaparf",
    city: "Ibagué"
  },
  {
    session: 12,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 13,
    date: "3 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 0,
    date: "13 Abril",
    day: "Martes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 1,
    date: "14 Abril",
    day: "Martes",
    topic: "Clase práctica 1: Introducción al color",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Alfaparf",
    city: "Neiva"
  },
  {
    session: 2,
    date: "15 Abril",
    day: "Miércoles",
    topic: "Clase práctica 2: Teoría de los colores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Alfaparf",
    city: "Neiva"
  },
  {
    session: 3,
    date: "16 Abril",
    day: "Jueves",
    topic: "Clase práctica 3: Boceto de autor",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Alfaparf",
    city: "Neiva"
  },
  {
    session: 4,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 5,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 6,
    date: "4 Mayo",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "8:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Neiva"
  },
  {
    session: 7,
    date: "6 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 4: Sombras y luces (papel aluminio)",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Alfaparf",
    city: "Neiva"
  },
  {
    session: 8,
    date: "7 Mayo",
    day: "Jueves",
    topic: "Clase práctica 5: Sombras y luces (balayage)",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Alfaparf",
    city: "Neiva"
  },
  {
    session: 9,
    date: "8 Mayo",
    day: "Viernes",
    topic: "Clase práctica 6: Rebel Art",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Alfaparf",
    city: "Neiva"
  },
  {
    session: 10,
    date: "11 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 11,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 12,
    date: "4 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Neiva"
  }
  ],
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
        },
       {
  id: 'barbershop',
  title: 'Barbería',
  description: 'Aprende todas las técnicas de corte clásico y moderno, afeitado profesional y diseño de barba.',
  image: 'https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwY3V0dGluZyUyMGhhaXJ8ZW58MXx8fHwxNzcyNTgwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  partner: 'Funse',
  available: true,
  sessions: [
     {
    session: 0,
    date: "8 Abril",
    day: "Miércoles",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "14 Abril",
    day: "Martes",
    topic: "Clase práctica 1",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Santa Helena",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 3,
    date: "20 Abril",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "8:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Ibagué"
  },
  {
    session: 4,
    date: "21 Abril",
    day: "Martes",
    topic: "Clase práctica 2",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Santa Helena",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "28 Abril",
    day: "Martes",
    topic: "Clase práctica 3",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Santa Helena",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "4 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "8:00 AM - 12:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 7,
    date: "5 Mayo",
    day: "Martes",
    topic: "Clase práctica 4",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Santa Helena",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 8,
    date: "9 Mayo",
    day: "Sábado",
    topic: "Curso de bioseguridad para establecimientos del sector belleza",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Gobernación del Tolima",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "11 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 10,
    date: "12 Mayo",
    day: "Martes",
    topic: "Clase práctica 5",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Santa Helena",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 11,
    date: "19 Mayo",
    day: "Martes",
    topic: "Clase práctica 6",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Santa Helena",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 12,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 13,
    date: "3 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
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
           sessions: [
    {
    session: 0,
    date: "8 Abril",
    day: "Martes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "11 Abril",
    day: "Sábado",
    topic: "Clase práctica 1: Conocimientos generales del café",
    time: "08:00 AM - 12:00 PM",
    classroom: "Primer piso Camara de comercio de Ibagué - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "11 Abril",
    day: "Sábado",
    topic: "Clase práctica 2: Conocimientos generales del café II",
    time: "2:00 PM - 5:00 PM",
    classroom: "Primer piso Camara de comercio de Ibagué - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 3,
    date: "20 Abril",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "8:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Ibagué"
  },
  {
    session: 4,
    date: "24 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Gastronomía)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "25 Abril",
    day: "Sábado",
    topic: "Clase práctica 3: Métodos de filtrado",
    time: "08:00 AM - 12:00 PM",
    classroom: "Primer piso Camara de comercio de Ibagué - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "25 Abril",
    day: "Sábado",
    topic: "Clase práctica 4: Técnicas de preparación",
    time: "2:00 PM - 5:00 PM",
    classroom: "Primer piso Camara de comercio de Ibagué - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 7,
    date: "4 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "8:00 AM - 12:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 8,
    date: "9 Mayo",
    day: "Sábado",
    topic: "Clase práctica 5: Tipos de leche, texturización y preparación de bebidas lácteas",
    time: "08:00 AM - 12:00 PM",
    classroom: "Primer piso Camara de comercio de Ibagué - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "9 Mayo",
    day: "Sábado",
    topic: "Clase práctica 6: Refuerzo",
    time: "2:00 PM - 5:00 PM",
    classroom: "Primer piso Camara de comercio de Ibagué - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 10,
    date: "11 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 11,
    date: "14 Mayo",
    day: "Jueves",
    topic: "Curso de higiene y manipulación de alimentos",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Gobernación del Tolima",
    city: "Ibagué"
  },
  {
    session: 12,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "8:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 13,
    date: "3 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "02:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 0,
    date: "13 Abril",
    day: "Miércoles",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 1,
    date: "18 Abril",
    day: "Sábado",
    topic: "Clase práctica 1: Conocimientos generales del café",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "C al Cubo",
    city: "Neiva"
  },
  {
    session: 2,
    date: "18 Abril",
    day: "Sábado",
    topic: "Clase práctica 2: Conocimientos generales del café I",
    time: "01:00 PM - 05:00 PM",
    classroom: "Salones UT",
    partner: "C al Cubo",
    city: "Neiva"
  },
  {
    session: 3,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "08:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 4,
    date: "24 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Gastronomía)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 5,
    date: "2 Mayo",
    day: "Sábado",
    topic: "Clase práctica 3: Métodos de filtrado",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "C al Cubo",
    city: "Neiva"
  },
  {
    session: 6,
    date: "2 Mayo",
    day: "Sábado",
    topic: "Clase práctica 4: Técnicas de preparación",
    time: "01:00 PM - 05:00 PM",
    classroom: "Salones UT",
    partner: "C al Cubo",
    city: "Neiva"
  },
  {
    session: 7,
    date: "4 Mayo",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "08:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Neiva"
  },
  {
    session: 8,
    date: "11 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 9,
    date: "16 Mayo",
    day: "Sábado",
    topic: "Clase práctica 5: Tipos de leche, texturización y preparación de bebidas lácteas",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "C al Cubo",
    city: "Neiva"
  },
  {
    session: 10,
    date: "16 Mayo",
    day: "Sábado",
    topic: "Clase práctica 6: Refuerzo",
    time: "01:00 PM - 05:00 PM",
    classroom: "Salones UT",
    partner: "C al Cubo",
    city: "Neiva"
  },
  {
    session: 11,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 12,
    date: "4 Junio",
    day: "Jueves",
    topic: "Clausura de graduación",
    time: "02:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
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
  sessions: [
   {
    session: 0,
    date: "8 Abril",
    day: "Martes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "14 Abril",
    day: "Martes",
    topic: "Clase práctica 1",
    time: "02:00 PM - 05:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "Dhamaile",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "20 Abril",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "08:00 AM - 12:00 PM",
    classroom: "Auditorio principal",
    partner: "Drakion",
    city: "Ibagué"
  },
  {
    session: 3,
    date: "24 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Gastronomía)",
    time: "08:00 AM - 10:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 4,
    date: "21 Abril",
    day: "Martes",
    topic: "Clase práctica 2",
    time: "02:00 PM - 05:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "Dhamaile",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "28 Abril",
    day: "Martes",
    topic: "Clase práctica 3",
    time: "02:00 PM - 05:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "Dhamaile",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "4 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "08:00 AM - 12:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 7,
    date: "5 Mayo",
    day: "Martes",
    topic: "Clase práctica 4",
    time: "02:00 PM - 05:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "Dhamaile",
    city: "Ibagué"
  },
  {
    session: 8,
    date: "11 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "12 Mayo",
    day: "Martes",
    topic: "Clase práctica 5",
    time: "02:00 PM - 05:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "Dhamaile",
    city: "Ibagué"
  },
  {
    session: 10,
    date: "14 Mayo",
    day: "Jueves",
    topic: "Curso de higiene y manipulación de alimentos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Gobernación del Tolima",
    city: "Ibagué"
  },
  {
    session: 11,
    date: "19 Mayo",
    day: "Martes",
    topic: "Clase práctica 6",
    time: "02:00 PM - 05:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "Dhamaile",
    city: "Ibagué"
  },
  {
    session: 12,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 13,
    date: "3 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "02:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
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
          sessions: [
   {
    session: 0,
    date: "8 Abril",
    day: "Martes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "15 Abril",
    day: "Miércoles",
    topic: "Clase práctica 1: Decoración de tortas",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "16 Abril",
    day: "Jueves",
    topic: "Clase práctica 2: Panes funcionales",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Ibagué"
  },
  {
    session: 3,
    date: "20 Abril",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "08:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Ibagué"
  },
  {
    session: 4,
    date: "22 Abril",
    day: "Miércoles",
    topic: "Clase práctica 3: Chocolatería",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "MIT Market",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "24 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Gastronomía)",
    time: "08:00 AM - 10:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "29 Abril",
    day: "Miércoles",
    topic: "Clase práctica 4: Masa madre",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "MIT Market",
    city: "Ibagué"
  },
  {
    session: 7,
    date: "4 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "08:00 AM - 12:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 8,
    date: "6 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 5: Hojaldros",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "MIT Market",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "11 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 10,
    date: "13 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 6: Refuerzo",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Ibagué"
  },
  {
    session: 11,
    date: "14 Mayo",
    day: "Jueves",
    topic: "Curso de higiene y manipulación de alimentos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Gobernación del Tolima",
    city: "Ibagué"
  },
  {
    session: 12,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 13,
    date: "3 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "02:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 0,
    date: "13 Abril",
    day: "Viernes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 1,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "01:00 PM - 05:00 PM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 2,
    date: "22 Abril",
    day: "Miércoles",
    topic: "Clase práctica 1: Decoración de tortas",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Neiva"
  },
  {
    session: 3,
    date: "24 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Gastronomía)",
    time: "08:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 4,
    date: "29 Abril",
    day: "Miércoles",
    topic: "Clase práctica 2: Panes funcionales",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Neiva"
  },
  {
    session: 5,
    date: "4 Mayo",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "08:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Neiva"
  },
  {
    session: 6,
    date: "6 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 3: Masa madre",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Neiva"
  },
  {
    session: 7,
    date: "11 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 8,
    date: "13 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 4: Chocolatería",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 9,
    date: "20 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 5: Hojaldros",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Neiva"
  },
  {
    session: 10,
    date: "27 Mayo",
    day: "Miércoles",
    topic: "Clase práctica 6: Refuerzo",
    time: "08:00 AM - 12:30 PM",
    classroom: "Cocina Universidad del Tolima",
    partner: "3 Castillos",
    city: "Neiva"
  },
  {
    session: 11,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 12,
    date: "4 Junio",
    day: "Jueves",
    topic: "Clausura de graduación",
    time: "02:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
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
image: 'https://images.unsplash.com/photo-1762604462465-76720d039e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwbWFpbnRlbmFuY2UlMjBtZWNoYW5pYyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MjU4MDMyMXww&ixlib=rb-4.1.0&q=80&w=1080',          sessions:[],
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
image: 'https://images.unsplash.com/photo-1770806630106-f3319f9d4ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwZGVjb3JhdGlvbiUyMHBhcnR5JTIwZXZlbnR8ZW58MXx8fHwxNzcyNTgwMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',  partner: 'Sempertex - Funse',
  available: true,
  sessions: [
    {
    session: 0,
    date: "8 Abril",
    day: "Martes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "16 Abril",
    day: "Jueves",
    topic: "Clase práctica 1: Globos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salón 4B - Centro Empresarial",
    partner: "Sempertex",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "20 Abril",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "08:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Ibagué"
  },
  {
    session: 3,
    date: "23 Abril",
    day: "Jueves",
    topic: "Clase práctica 2: Globos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salón 4B - Centro Empresarial",
    partner: "Sempertex",
    city: "Ibagué"
  },
  {
    session: 4,
    date: "30 Abril",
    day: "Jueves",
    topic: "Clase práctica 3: Globos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salón 4B - Centro Empresarial",
    partner: "Sempertex",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "4 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "08:00 AM - 12:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "7 Mayo",
    day: "Jueves",
    topic: "Clase práctica 4: Flores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Cádiz",
    partner: "Sempertex",
    city: "Ibagué"
  },
  {
    session: 7,
    date: "8 Mayo",
    day: "Viernes",
    topic: "Costos y formalización (Decoración)",
    time: "08:00 AM - 10:00 AM",
    classroom: "Auditorio principal",
    partner: "Camara de comercio de Ibagué",
    city: "Ibagué"
  },
  {
    session: 8,
    date: "11 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "14 Mayo",
    day: "Jueves",
    topic: "Clase práctica 5: Flores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Cádiz",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 10,
    date: "21 Mayo",
    day: "Jueves",
    topic: "Clase práctica 6: Flores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse - Cádiz",
    partner: "Funse",
    city: "Ibagué"
  },
  {
    session: 11,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 12,
    date: "3 Junio",
    day: "Miércoles",
    topic: "Clausura de graduación",
    time: "02:00 PM",
    classroom: "Auditorio principal",
    partner: "Universidad del Tolima",
    city: "Ibagué"
  },
  {
    session: 0,
    date: "13 Abril",
    day: "Viernes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 1,
    date: "16 Abril",
    day: "Jueves",
    topic: "Clase práctica 1: Flores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse",
    partner: "Funse",
    city: "Neiva"
  },
  {
    session: 2,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 3,
    date: "23 Abril",
    day: "Jueves",
    topic: "Clase práctica 2: Flores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse",
    partner: "Funse",
    city: "Neiva"
  },
  {
    session: 4,
    date: "30 Abril",
    day: "Jueves",
    topic: "Clase práctica 3: Flores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Funse",
    partner: "Funse",
    city: "Neiva"
  },
  {
    session: 5,
    date: "4 Mayo",
    day: "Lunes",
    topic: "Conceptos de mercadeo y manejo de redes sociales",
    time: "08:00 AM - 12:00 PM",
    classroom: "Virtual",
    partner: "Drakion",
    city: "Neiva"
  },
  {
    session: 6,
    date: "7 Mayo",
    day: "Jueves",
    topic: "Clase práctica 4: Globos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Sempertex",
    city: "Neiva"
  },
  {
    session: 7,
    date: "8 Mayo",
    day: "Viernes",
    topic: "Costos y formalización (Decoración)",
    time: "08:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "Camara de comercio de Ibagué",
    city: "Neiva"
  },
  {
    session: 8,
    date: "11 Mayo",
    day: "Jueves",
    topic: "Servicio al cliente",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 9,
    date: "14 Mayo",
    day: "Jueves",
    topic: "Clase práctica 5: Globos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Sempertex",
    city: "Neiva"
  },
  {
    session: 10,
    date: "21 Mayo",
    day: "Jueves",
    topic: "Clase práctica 6: Globos",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Sempertex",
    city: "Neiva"
  },
  {
    session: 11,
    date: "25 Mayo",
    day: "Lunes",
    topic: "Finanzas para emprendedores",
    time: "08:00 AM - 12:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  },
  {
    session: 12,
    date: "4 Junio",
    day: "Jueves",
    topic: "Clausura de graduación",
    time: "02:00 PM",
    classroom: "Salones UT",
    partner: "Universidad del Tolima",
    city: "Neiva"
  }
  ],
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header',
},
      ],
    },
  ];

 const activeSection = useActiveSection(['belleza', 'gastronomia', 'autopartes', 'diseno', 'impacto', 'aliados']);

  const getSectionId = (category: string) => {
    if (category === 'E.E. BELLEZA') return 'belleza';
    if (category === 'E.E. GASTRONOMÍA') return 'gastronomia';
    if (category === 'E.E. AUTOPARTES') return 'autopartes';
    if (category === 'E.E. DISEÑO – MANUALIDADES') return 'diseno';
    return '';
  };

  const getCategoryBackground = (category: string, isActive: boolean) => {
    switch (category) {
      case 'E.E. BELLEZA':
        return <BellezaBackground isActive={isActive} />;
      case 'E.E. GASTRONOMÍA':
        return <GastronomiaBackground isActive={isActive} />;
      case 'E.E. AUTOPARTES':
        return <AutopartesBackground isActive={isActive} />;
      case 'E.E. DISEÑO – MANUALIDADES':
        return <DisenoBackground isActive={isActive} />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string, isActive: boolean) => {
    const colors = {
      'E.E. BELLEZA': isActive ? 'text-pink-600' : 'text-pink-700',
      'E.E. GASTRONOMÍA': isActive ? 'text-orange-700' : 'text-orange-800',
      'E.E. AUTOPARTES': isActive ? 'text-gray-700' : 'text-gray-800',
      'E.E. DISEÑO – MANUALIDADES': isActive ? 'text-purple-600' : 'text-purple-700',
    };
    return colors[category as keyof typeof colors] || 'text-gray-800';
  };

  const getCategoryAccentColor = (category: string) => {
    const colors = {
      'E.E. BELLEZA': 'from-pink-600 via-pink-500 to-pink-400',
      'E.E. GASTRONOMÍA': 'from-orange-700 via-orange-600 to-orange-500',
      'E.E. AUTOPARTES': 'from-gray-600 via-gray-500 to-gray-400',
      'E.E. DISEÑO – MANUALIDADES': 'from-purple-600 via-purple-500 to-purple-400',
    };
    return colors[category as keyof typeof colors] || 'from-blue-600 via-blue-500 to-blue-400';
  };

  const getCategoryBorderColor = (category: string) => {
    const colors = {
      'E.E. BELLEZA': 'from-pink-500 via-pink-600 to-pink-700',
      'E.E. GASTRONOMÍA': 'from-orange-600 via-orange-700 to-orange-800',
      'E.E. AUTOPARTES': 'from-gray-500 via-gray-600 to-gray-700',
      'E.E. DISEÑO – MANUALIDADES': 'from-purple-500 via-purple-600 to-purple-700',
    };
    return colors[category as keyof typeof colors] || 'from-blue-500 via-blue-600 to-blue-700';
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Header />
      <AboutSection />
      <StatsSection />
      
      {/* Courses Section */}
      <section id="cursos" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {courseCategories.map((categoryData, categoryIndex) => {
            const sectionId = getSectionId(categoryData.category);
            const isActive = activeSection === sectionId;

            return (
              <motion.div 
                key={categoryData.category} 
                id={sectionId}
                className={`mb-16 transition-all duration-500 relative`}
                animate={{
                  scale: 1,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Category Background */}
                {getCategoryBackground(categoryData.category, isActive)}


                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className={`mb-8 relative ${isActive ? 'pl-6' : ''} z-10`}
                >
                  <div className="flex items-center gap-4 mb-2 flex-wrap">
                    <motion.div 
                      className={`h-1 rounded-full transition-all duration-500 ${
                        isActive 
                          ? `w-20 bg-gradient-to-r ${getCategoryAccentColor(categoryData.category)}` 
                          : `w-12 bg-gradient-to-r ${getCategoryAccentColor(categoryData.category)}`
                      }`}
                      animate={{
                        boxShadow: isActive 
                          ? ['0 0 10px rgba(147, 112, 219, 0.5)', '0 0 20px rgba(147, 112, 219, 0.8)', '0 0 10px rgba(147, 112, 219, 0.5)']
                          : 'none'
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${
                      getCategoryColor(categoryData.category, isActive)
                    } ${isActive ? 'drop-shadow-lg' : ''}`}>
                      {categoryData.category}
                    </h2>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className={`bg-gradient-to-r ${getCategoryBorderColor(categoryData.category)} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}
                      >
                        Viendo ahora
                      </motion.div>
                    )}
                  </div>
                  <motion.div 
                    className={`h-0.5 w-full rounded-full transition-all duration-500 bg-gradient-to-r ${
                      isActive 
                        ? getCategoryAccentColor(categoryData.category) + ' opacity-60' 
                        : getCategoryAccentColor(categoryData.category) + ' opacity-20'
                    }`}
                    animate={{
                      boxShadow: isActive 
                        ? '0 2px 15px rgba(147, 112, 219, 0.4)'
                        : 'none'
                    }}
                  />
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {categoryData.courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      sessions={course.sessions}
                      partner={course.partner}
                      available={course.available}
                      categoryColor={categoryData.color}
                      category={categoryData.category}
                      registrationUrl={course.registrationUrl}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
            <SponsorLogos />
      <StatsSection />
      <Footer />
    </div>
  );
}
