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
partner:"CCI",
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
    partner: "CCI",
    city: "Neiva"
  },
  {
    session: 1,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
    city: "Neiva"
  },
  {
    session: 1,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "CCI",
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
    partner: "CCI",
    city: "Ibagué"
  },
  {
    session: 1,
    date: "17 Abril",
    day: "Viernes",
    topic: "Costos y formalización (Belleza)",
    time: "8:00 AM - 10:00 AM",
    classroom: "Salones UT",
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
  image: barberiaImg,
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
    partner: "CCI",
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
    partner: "CCI",
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
    classroom: "Primer piso CCI - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 2,
    date: "11 Abril",
    day: "Sábado",
    topic: "Clase práctica 2: Conocimientos generales del café II",
    time: "2:00 PM - 5:00 PM",
    classroom: "Primer piso CCI - Amore e Caffè",
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
    partner: "CCI",
    city: "Ibagué"
  },
  {
    session: 5,
    date: "25 Abril",
    day: "Sábado",
    topic: "Clase práctica 3: Métodos de filtrado",
    time: "08:00 AM - 12:00 PM",
    classroom: "Primer piso CCI - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 6,
    date: "25 Abril",
    day: "Sábado",
    topic: "Clase práctica 4: Técnicas de preparación",
    time: "2:00 PM - 5:00 PM",
    classroom: "Primer piso CCI - Amore e Caffè",
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
    classroom: "Primer piso CCI - Amore e Caffè",
    partner: "C al Cubo",
    city: "Ibagué"
  },
  {
    session: 9,
    date: "9 Mayo",
    day: "Sábado",
    topic: "Clase práctica 6: Refuerzo",
    time: "2:00 PM - 5:00 PM",
    classroom: "Primer piso CCI - Amore e Caffè",
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
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
    city: "Neiva"
  },
  {
    session: 1,
    date: "20 Abril",
    day: "Lunes",
    topic: "Modelo de negocio Canvas",
    time: "01:00 PM - 05:00 PM",
    classroom: "Salones UT",
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
          image: motosImg,
          sessions:[],
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
  sessions: [
    {
    session: 0,
    date: "8 Abril",
    day: "Martes",
    topic: "Inducción / Lanzamiento programa",
    time: "09:00 AM",
    classroom: "Auditorio principal",
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
    partner: "CCI",
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
  {categoryData.courses.map((course, index) => (
    <CourseCard
      key={index}
      title={course.title}
      description={course.description}
      image={course.image}
      partner={course.partner}
      sessions={course.sessions}
      available={course.available}
      registrationUrl={course.registrationUrl}
       categoryColor={categoryData.color} 
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
