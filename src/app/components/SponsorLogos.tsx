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
import UniCooperativa from '../../assets/images/UniCooperativa.png';
import Richs from '../../assets/images/richs.png';
import Rucary from '../../assets/images/rucary.png';

export function SponsorLogos() {
  const linkClassName = 'group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4';
  const sponsors = [
    {
      image: Masglo,
      website: 'https://www.masglo.com/',
      category: 'Belleza',
    },
    {
      image: Alfaparf,
      website: 'https://www.alfaparfmilanopro.com/',
      category: 'Belleza',
    },
    {
      image: Funse,
      website: 'https://www.funsecolombia.com/',
      category: 'Educación',
    },
    {
      image: Amore,
      // TODO: Confirmar el perfil o sitio oficial de Amore Café antes de publicar.
      website: 'https://www.instagram.com/amorecafeibague/',
      category: 'Gastronomía',
    },
    {
      image: Pastel,
      // TODO: Sustituir por la web oficial de M.D.P. cuando sea proporcionada.
      website: 'https://www.instagram.com/mdppasteleria/',
      category: 'Gastronomía',
    },
    {
      image: TresCastillos,
      website: 'https://3castillos.com/',
      category: 'Gastronomía',
    },
    {
      image: Honda,
      website: 'https://www.honda.com.co/',
      category: 'Autopartes',
    },
    {
      image: Sempertex,
      website: 'https://sempertex.com/',
      category: 'Diseño',
    },
    {
      image: DrakionTech,
      website: 'https://drakiontech.com/',
      category: 'Tecnología',
    },
    {
      image: Dhamaile,
      // TODO: Confirmar la URL oficial de Dhamaile Chocolatería Fina antes de publicar.
      website: 'https://dhamaile.com/',
      category: 'Gastronomía',
    },
    {
      image: Cauchera,
      website: 'https://confecaucho.com/',
      category: 'agroindustrial',
    },
    {
      image: Rucary,
      // TODO: Configurar la URL oficial de Rucary cuando sea proporcionada.
      website: '#',
      category: 'Aliado',
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
              <a href="https://ccibague.org/" target="_blank" rel="noreferrer" aria-label="Visitar Cámara de Comercio de Ibagué" className={linkClassName}>
              <img
                src={logoEmpresa}
                alt="Logo Escuela Empresarial"
                className="w-38 h-38 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
            </div>
          </div>

          {/* Recuadro 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <a href="https://www.ccb.org.co/" target="_blank" rel="noreferrer" aria-label="Visitar Cámara de Comercio de Bogotá" className={linkClassName}>
              <img
                src={logoBogota}
                alt="Logo aliado"
                className="w-38 h-38 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
            </div>
          </div>

          {/* Recuadro 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <a href="https://cchuila.org/" target="_blank" rel="noreferrer" aria-label="Visitar Cámara de Comercio del Huila" className={linkClassName}>
              <img
                src={logoHuila}
                alt="Logo aliado"
                className="w-38 h-38 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
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
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visitar sitio web de ${sponsor.category}`}
                  className={linkClassName}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden group-hover:shadow-xl transition-shadow duration-300 h-64 mx-auto max-w-sm"
                  >
                    <div className="h-46 flex items-center justify-center">
                      <img
                        src={sponsor.image}
                        alt={`Logo de empresa aliada de ${sponsor.category}`}
                        className="max-h-46 object-contain"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-blue-600">
                        {sponsor.category}
                      </p>
                    </div>
                  </motion.div>
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid móvil */}
        <div className="grid grid-cols-2 gap-3 md:hidden px-2">
          {sponsors.map((sponsor, index) => (
            <div key={index}>
              <a
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visitar sitio web de ${sponsor.category}`}
                className={linkClassName}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-40 flex flex-col justify-center items-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <img
                    src={sponsor.image}
                    alt={`Logo de empresa aliada de ${sponsor.category}`}
                    className="max-h-34 object-contain"
                  />
                  <div className="p-2 text-center">
                    <p className="text-xs text-blue-600">
                      {sponsor.category}
                    </p>
                  </div>
                </div>
              </a>
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
              <a href="https://www.ut.edu.co/" target="_blank" rel="noreferrer" aria-label="Visitar Universidad del Tolima" className={linkClassName}>
              <img
                src={logoUT}
                alt="Logo UT"
                className="w-44 h-44 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
            </div>
          </div>

          {/* Recuadro 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <a href="https://www.uniminuto.edu/" target="_blank" rel="noreferrer" aria-label="Visitar UNIMINUTO" className={linkClassName}>
              <img
                src={logoUniminuto}
                alt="Logo UNIMINUTO"
                className="w-44 h-44 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
            </div>
          </div>

          {/* Recuadro 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <a href="https://www.tolima.gov.co/" target="_blank" rel="noreferrer" aria-label="Visitar Gobernación del Tolima" className={linkClassName}>
              <img
                src={logoGonernacionTolima}
                alt="Logo Gobernación del Tolima"
                className="w-44 h-44 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <a href="https://www.ucc.edu.co/" target="_blank" rel="noreferrer" aria-label="Visitar Universidad Cooperativa de Colombia" className={linkClassName}>
              <img
                src={UniCooperativa}
                alt="Logo Universidad Cooperativa"
                className="w-44 h-44 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 w-72">
            <div className="flex flex-col items-center gap-4">
              <a href="https://www.richs.com.co/" target="_blank" rel="noreferrer" aria-label="Visitar Rich's" className={linkClassName}>
              <img
                src={Richs}
                alt="Logo RICH"
                className="w-44 h-44 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              </a>
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
