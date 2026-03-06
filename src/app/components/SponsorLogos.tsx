import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Building2 } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoEmpresa from '../../assets/images/logocamara.png';
import Masglo from '../../assets/images/masglo.png';
import Alfaparf from '../../assets/images/Alfaparf.png';
import Funse from '../../assets/images/funse.png';
import Amore from '../../assets/images/amore.png';
import TresCastillos from '../../assets/images/3castillos.png';
import Honda from '../../assets/images/honda.png';
import Sempertex from '../../assets/images/Sempertex.png';
import DrakionTech from '../../assets/images/drakion.png';
import Pastel from "../../assets/images/pastel.png";

export function SponsorLogos() {
  const sponsors = [
    {
      name: 'Masglo',
      image: Masglo,
      category: 'Belleza',
    },
    {
      name: 'Alfaparf',
      image: Alfaparf,
      category: 'Belleza',
    },
    {
      name: 'Funse',
      image: Funse,
      category: 'Educación',
    },
    {
      name: 'Amore e Caffé',
      image: Amore,
      category: 'Gastronomía',
    },
    {
      name: 'Mi Dulce Pastel',
      image: Pastel,
      category: 'Gastronomía',
    },
    {
      name: 'Tres Castillos',
      image: TresCastillos,
      category: 'Gastronomía',
    },
    {
      name: 'Honda Motos',
      image: Honda,
      category: 'Autopartes',
    },
    {
      name: 'Sempertex',
      image: Sempertex,
      category: 'Diseño',
    },
    {
      name: 'DrakionTech',
      image: DrakionTech,
      category: 'Tecnología',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <section id="aliados" className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Organiza Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Organiza</h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 inline-block">
              {/* Placeholder para el logo - el usuario puede reemplazarlo */}
              <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center">
                <img
                  src={logoEmpresa}
                  alt="Logo Escuela Empresarial"
                  className="w-44 h-44 object-contain"
                />
                </div>
                  <p className="text-xl font-bold text-gray-800 mt-4">Camara de comercio</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Nuestros Aliados Estratégicos
          </h2>

          <div className="px-2 sm:px-4 md:px-8">
            <Slider {...settings}>
              {sponsors.map((sponsor, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-64 mx-auto max-w-sm"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg text-gray-800">{sponsor.name}</h3>
                      <p className="text-sm text-blue-600">{sponsor.category}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Info text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Trabajamos con las mejores marcas para ofrecerte la mejor capacitación
          </p>
        </motion.div>
      </div>
    </section>
  );
}