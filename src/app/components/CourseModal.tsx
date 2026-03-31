import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../../styles/slick-custom.css';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    description: string;
    image: string;
    partner: string;
    category: string;
  };
  categoryColor: {
    primary: string;
    gradient: string;
    bg: string;
  };
  carouselImages: string[];
  partnerLogo: string;
   available: boolean;
  registrationUrl?: string;
}

function NextArrow(props: any) {
  const { onClick, categoryColor } = props;
  return (
    <button
      onClick={onClick}
      className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 ${categoryColor} text-white p-1.5 rounded-full shadow-md transition-all hover:scale-110 focus:outline-none opacity-80 hover:opacity-100`}
      aria-label="Siguiente"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick, categoryColor } = props;
  return (
    <button
      onClick={onClick}
      className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 ${categoryColor} text-white p-1.5 rounded-full shadow-md transition-all hover:scale-110 focus:outline-none opacity-80 hover:opacity-100`}
      aria-label="Anterior"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
  );
}

export function CourseModal({
  isOpen,
  onClose,
  course,
  categoryColor,
  carouselImages,
  partnerLogo,
  available,
  registrationUrl
}: CourseModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow categoryColor={categoryColor.primary} />,
    prevArrow: <PrevArrow categoryColor={categoryColor.primary} />,
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors" />
    ),
    dotsClass: "slick-dots !bottom-2",
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`${categoryColor.gradient} px-6 py-4 relative`}>
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold text-white pr-10">
                  {course.title}
                </h2>
                <p className="text-white/90 text-xs mt-1">
                  {course.category}
                </p>
              </div>

              {/* Content - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(85vh-80px)]">
                {/* Carousel Section - Compact */}
                <div className="relative bg-gray-50">
                  <Slider {...settings}>
                    {carouselImages.map((image, index) => (
                      <div key={index} className="outline-none">
                        <div className="relative h-40 md:h-48">
                          <img
                            src={image}
                            alt={`${course.title} - Imagen ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Description */}
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className={`w-1 h-5 ${categoryColor.primary} rounded-full`} />
                        Descripción
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {course.description}
                      </p>
                      
                    {available && (
  <div 
    className="bg-gray-50 rounded-lg p-4 border-l-2"
    style={{ borderColor: categoryColor?.bg || "#D94EE6" }}
  >
    <p className="text-sm text-gray-600">
      ¿Te interesa este curso? Haz clic en{" "}
      <strong
        className="cursor-pointer underline"
        style={{ color: categoryColor?.bg || "#D94EE6" }}
        onClick={() => window.open(registrationUrl, "_blank")}
      >
        Registrarse
      </strong>{" "}
      para continuar.
    </p>
  </div>
)}
                    </div>

                    {/* Right Column - Partner Logo */}
                    <div className="md:col-span-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className={`w-1 h-5 ${categoryColor.primary} rounded-full`} />
                        Aliado
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4 border" style={{ borderColor: categoryColor.bg }}>
                        <div className="aspect-square w-full flex items-center justify-center bg-white rounded-lg p-3">
                          <img
                            src={partnerLogo}
                            alt={course.partner}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-center font-medium text-gray-800 mt-3 text-sm">
                          {course.partner}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}