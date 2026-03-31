import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { CourseModal } from "./CourseModal"

interface Session {
  session: number
  date: string
  day: string
  topic: string
  time: string
  classroom: string
  partner: string
  city: "Ibagué" | "Neiva"
}

interface CourseCardProps {
  title: string
  description: string
  image: string
  partner: string
  sessions?: Session[]
  available: boolean
  registrationUrl?: string
  categoryColor?: string
  category?: string
  carouselImages?: string[]
  partnerLogo?: string
}

export function CourseCard({
  title,
  description,
  image,
  partner,
  sessions,
  available,
  registrationUrl = "#",
  categoryColor,
  category = "Curso",
  carouselImages,
  partnerLogo,
}: CourseCardProps) {

  const previewSessions = (sessions ?? []).slice(0, 2)
  const remainingSessions = Math.max((sessions ?? []).length - 2, 0)

  const ibagueSessions = (sessions ?? []).filter(
    (s) => s.city === "Ibagué"
  )

  const neivaSessions = (sessions ?? []).filter(
    (s) => s.city === "Neiva"
  )

  const [openSchedule, setOpenSchedule] = useState(false)
  const [openCourseModal, setOpenCourseModal] = useState(false)

  // Colores por categoría para el modal
  const getCategoryColors = () => {
    const colorMap: { [key: string]: { primary: string; gradient: string; bg: string } } = {
      'E.E. BELLEZA': {
        primary: 'bg-pink-500',
        gradient: 'bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700',
        bg: '#FFC0CB'
      },
      'E.E. GASTRONOMÍA': {
        primary: 'bg-amber-700',
        gradient: 'bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900',
        bg: '#A0522D'
      },
      'E.E. AUTOPARTES': {
        primary: 'bg-gray-500',
        gradient: 'bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700',
        bg: '#B0B0B0'
      },
      'E.E. DISEÑO-MANUALIDADES': {
        primary: 'bg-purple-500',
        gradient: 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700',
        bg: '#9370DB'
      }
    };
    
    return colorMap[category] || {
      primary: 'bg-blue-500',
      gradient: 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700',
      bg: '#3B82F6'
    };
  };

  // Imágenes de carrusel - usa las proporcionadas o fallback
  const defaultCarouselImages = [
    image,
    'https://images.unsplash.com/photo-1767595666159-48794b9e9a7e?w=1080',
    'https://images.unsplash.com/photo-1759521296047-89338c8e083d?w=1080',
    'https://images.unsplash.com/photo-1763310225230-6e15b125935a?w=1080',
  ];

  const modalCarouselImages = carouselImages && carouselImages.length === 4 
    ? carouselImages 
    : defaultCarouselImages;

  // Logo del partner - usa el proporcionado o fallback
  const defaultPartnerLogo = 'https://images.unsplash.com/photo-1765852549902-bd9c79d01afb?w=400';
  const modalPartnerLogo = partnerLogo || defaultPartnerLogo;

  return (
    <>
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <div 
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => setOpenCourseModal(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />

          {!available && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              No disponible
            </div>
          )}
        </div>

        <div className="p-6">

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {title}
          </h3>

          <p className="text-sm text-blue-600 mb-3 font-medium">
            {partner}
          </p>

          {/* SESIONES PREVIEW */}
          <div className="space-y-1 text-sm text-gray-600 mb-4">
            {previewSessions.map((session, index) => (
              <div key={index}>
                {session.date} — {session.time}
              </div>
            ))}

            {remainingSessions > 0 && (
              <button
                onClick={() => setOpenSchedule(true)}
                className="font-medium hover:underline"
                style={{ color: categoryColor }}
              >
                +{remainingSessions} sesiones más
              </button>
            )}
          </div>

          <p className="text-gray-600 mb-4">
            {description}
          </p>

<button
  onClick={() => {
    if (available && registrationUrl !== "#") {
      window.open(registrationUrl, "_blank")
    }
  }}
  disabled={!available}
  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
    available
      ? "bg-[#D94EE6] text-white hover:bg-[#c13bcc] hover:shadow-lg hover:-translate-y-0.5"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  {available ? (
    <>
      Registrarse
      <ExternalLink className="w-4 h-4" />
    </>
  ) : (
    "No disponible"
  )}
</button>
        </div>
      </motion.div>

      {/* MODAL DE CRONOGRAMA */}
      {openSchedule && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-xl">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">
                Cronograma del curso
              </h3>

              <button
                onClick={() => setOpenSchedule(false)}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* IBAGUÉ */}
              {ibagueSessions.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                    Ibagué
                  </h4>

                  <div className="space-y-2">
                    {ibagueSessions.map((session, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-3 text-sm space-y-1"
                      >
                        <div className="font-semibold">
                          Sesión {session.session}
                        </div>

                        <div>
                          {session.day} — {session.date}
                        </div>

                        <div>{session.time}</div>

                        <div className="font-medium">
                          {session.topic}
                        </div>

                        <div className="text-gray-500">
                          {session.classroom}
                        </div>

                        <div className="text-xs text-blue-600">
                          {session.partner}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* NEIVA */}
              {neivaSessions.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                    Neiva
                  </h4>

                  <div className="space-y-2">
                    {neivaSessions.map((session, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-3 text-sm space-y-1"
                      >
                        <div className="font-semibold">
                          Sesión {session.session ?? "Por definir"}
                        </div>

                        <div>
                          {session.day ?? "Por definir"} —{" "}
                          {session.date ?? "Por definir"}
                        </div>

                        <div>
                          {session.time ?? "Por definir"}
                        </div>

                        <div className="font-medium">
                          {session.topic ?? "Tema por definir"}
                        </div>

                        <div className="text-gray-500">
                          {session.classroom ?? "Lugar por definir"}
                        </div>

                        <div className="text-xs text-blue-600">
                          {session.partner ?? "Aliado por definir"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

      <CourseModal
        isOpen={openCourseModal}
        onClose={() => setOpenCourseModal(false)}
        course={{
          title,
          description,
          image,
          partner,
          category
        }}
        categoryColor={getCategoryColors()}
        carouselImages={modalCarouselImages}
        partnerLogo={modalPartnerLogo}
      />
    </>
  )
}