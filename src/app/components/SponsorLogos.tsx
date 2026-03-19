import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Building2 } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoEmpresa from '../../assets/images/logocamara.png';
import logoBogota from '../../assets/images/bogota.png';
import logoHuila from '../../assets/images/huila.png';
import logoUT from '../../assets/images/universiadTolima.png';
import logoUniminuto from '../../assets/images/uniminuto.png';
import logoGonernacionTolima from '../../assets/images/gobernacion.png';
import Masglo from '../../assets/images/masglo.png';
import Alfaparf from '../../assets/images/Alfaparf.png';
import Funse from '../../assets/images/funse.png';
import Amore from '../../assets/images/amore.png';
import TresCastillos from '../../assets/images/3castillos.png';
import Honda from '../../assets/images/honda.png';
import Sempertex from '../../assets/images/Sempertex.png';
import DrakionTech from '../../assets/images/drakion.png';
import Pastel from "../../assets/images/pastel.png";
import Dhamaile from '../../assets/images/Dhamaile.png';
import Cauchera from "../../assets/images/confederacionCauchera.png";

export function SponsorLogos() {
  const sponsors = [
    {
      image: Masglo,
      category: 'Belleza',
    },
    {
      image: Alfaparf,
      category: 'Belleza',
    },
    {
      image: Funse,
      category: 'Educación',
    },
    {
      image: Amore,
      category: 'Gastronomía',
    },
    {
      image: Pastel,
      category: 'Gastronomía',
    },
    {
      image: TresCastillos,
      category: 'Gastronomía',
    },
    {
      image: Honda,
      category: 'Autopartes',
    },
    {
      image: Sempertex,
      category: 'Diseño',
    },
    {
      image: DrakionTech,
      category: 'Tecnología',
    },
    {
      image: Dhamaile,
      category: 'Gastronomía',
    },
    {
      image: Cauchera,
      category: 'agroindustrial',
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
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
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
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Alianza
        </h3>

        <div className="flex flex-wrap justify-center gap-8">

          {/* Recuadro 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <img
                src={logoEmpresa}
                alt="Logo Escuela Empresarial"
                className="w-38 h-38 object-contain"
              />
            </div>
          </div>

          {/* Recuadro 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <img
                src={logoBogota}
                alt="Logo aliado"
                className="w-38 h-38 object-contain"
              />
            </div>
          </div>

          {/* Recuadro 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <img
                src={logoHuila}
                alt="Logo aliado"
                className="w-38 h-38 object-contain"
              />
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
          Apoyan
        </h2>

        {/* Carrusel */}
        <div className="hidden md:block px-2 sm:px-4 md:px-8">
          <Slider {...settings}>
            {sponsors.map((sponsor, index) => (
              <div key={index} className="px-2 w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-64 mx-auto max-w-sm"
                >
                  <div className="h-46 flex items-center justify-center">
                    <img
                      src={sponsor.image}
                      className="max-h-46 object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg text-gray-800">
                    </h3>
                    <p className="text-sm text-blue-600">
                      {sponsor.category}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid móvil */}
        <div className="grid grid-cols-2 gap-3 md:hidden px-2">
          {sponsors.map((sponsor, index) => (
            <div key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-40 flex flex-col justify-center items-center">
                <img
                  src={sponsor.image}
                  className="max-h-34 object-contain"
                />
                <div className="p-2 text-center">
                  <h3 className="font-semibold text-sm text-gray-800">
                  </h3>
                  <p className="text-xs text-blue-600">
                    {sponsor.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Colaboración Especial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center mt-15 mb-8 text-gray-800">
          Colaboración Especial
        </h3>

        <div className="flex flex-wrap justify-center gap-8">

          {/* Recuadro 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <img
                src={logoUT}
                alt="Logo UT"
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>

          {/* Recuadro 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <img
                src={logoUniminuto}
                alt="Logo UNIMINUTO"
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>

          {/* Recuadro 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <img
                src={logoGonernacionTolima}
                alt="Logo Gobernación del Tolima"
                className="w-44 h-44 object-contain"
              />
            </div>
          </div>

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