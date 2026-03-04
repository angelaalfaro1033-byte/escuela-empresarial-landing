import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { SponsorLogos } from './components/SponsorLogos';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';

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
          image: 'https://images.unsplash.com/photo-1737214475365-e4f06281dcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzcyNTgwMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
          partner: 'Masglo',
          available: true,
          registrationUrl: 'https://forms.google.com/example',
        },
        // {
        //   id: 'makeup',
        //   title: 'Maquillaje Profesional',
        //   description: 'Domina las técnicas profesionales de maquillaje para todo tipo de eventos y ocasiones especiales.',
        //   image: 'https://images.unsplash.com/photo-1600637070413-0798fafbb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcnRpc3QlMjBjb3NtZXRpY3N8ZW58MXx8fHwxNzcyNTgwMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        //   partner: 'Masglo',
        //   available: true,
        //   registrationUrl: 'https://forms.google.com/example',
        // },
        // {
        //   id: 'colorimetry',
        //   title: 'Colorimetría',
        //   description: 'Conviértete en experto en teoría del color y técnicas avanzadas de coloración capilar profesional.',
        //   image: 'https://images.unsplash.com/photo-1617391654484-2894196c2cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBjb2xvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzI0NzU3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        //   partner: 'Alfaparf',
        //   available: true,
        //   registrationUrl: 'https://forms.google.com/example',
        // },
        // {
        //   id: 'barbershop',
        //   title: 'Barbería',
        //   description: 'Aprende todas las técnicas de corte clásico y moderno, afeitado profesional y diseño de barba.',
        //   image: 'https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwY3V0dGluZyUyMGhhaXJ8ZW58MXx8fHwxNzcyNTgwMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        //   partner: 'Funse',
        //   available: true,
        //   registrationUrl: 'https://forms.google.com/example',
        // },
      ],
    },
    {
      category: 'E.E. GASTRONOMÍA',
      courses: [
        {
          id: 'barista',
          title: 'Barismo',
          description: 'Descubre el arte del café: desde la selección del grano hasta el latte art más sofisticado.',
          image: 'https://images.unsplash.com/photo-1655655555559-70610bfe5598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwY29mZmVlJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzcyNTgwMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
          partner: 'Amore e Caffé',
          available: true,
          registrationUrl: 'https://forms.google.com/example',
        },
        // {
        //   id: 'chocolate',
        //   title: 'Chocolatería',
        //   description: 'Crea deliciosas obras maestras de chocolate y aprende técnicas de tempering y decoración.',
        //   image: 'https://images.unsplash.com/photo-1498602313661-39f9a4e343a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwcGFzdHJ5JTIwbWFraW5nfGVufDF8fHx8MTc3MjU4MDMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
        //   partner: 'Mi Dulce Pastel',
        //   available: true,
        //   registrationUrl: 'https://forms.google.com/example',
        // },
        // {
        //   id: 'bakery',
        //   title: 'Panadería Artesanal',
        //   description: 'Domina las técnicas de panadería tradicional y moderna para crear panes de la más alta calidad.',
        //   image: 'https://images.unsplash.com/photo-1575282253346-e5eb3a9f12d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGJha2luZyUyMGZyZXNofGVufDF8fHx8MTc3MjU4MDMyMXww&ixlib=rb-4.1.0&q=80&w=1080',
        //   partner: 'Tres Castillos',
        //   available: true,
        //   registrationUrl: 'https://forms.google.com/example',
        // },
      ],
    },
    // {
    //   category: 'E.E. AUTOPARTES',
    //   courses: [
    //     {
    //       id: 'motorcycle',
    //       title: 'Mantenimiento de Motos',
    //       description: 'Curso exclusivo para miembros de las Fuerzas Militares. Aprende el mantenimiento integral de motocicletas.',
    //       image: 'https://images.unsplash.com/photo-1762604462465-76720d039e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwbWFpbnRlbmFuY2UlMjBtZWNoYW5pYyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MjU4MDMyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    //       partner: 'Honda Motos - Curso exclusivo FFMM',
    //       available: false,
    //     },
    //   ],
    // },
    {
      category: 'E.E. DISEÑO – MANUALIDADES',
      courses: [
        {
          id: 'decoration',
          title: 'Decoración Comercial con Globos y Arreglos Florales',
          description: 'Aprende a crear impresionantes decoraciones para eventos con globos y arreglos florales profesionales.',
          image: 'https://images.unsplash.com/photo-1770806630106-f3319f9d4ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwZGVjb3JhdGlvbiUyMHBhcnR5JTIwZXZlbnR8ZW58MXx8fHwxNzcyNTgwMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
          partner: 'Sempertex - Funse',
          available: true,
          registrationUrl: 'https://forms.google.com/example',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Header />
      
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
