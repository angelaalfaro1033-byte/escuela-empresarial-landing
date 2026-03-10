import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface Schedule {
  city: 'Ibagué' | 'Neiva';
  days: string;
  time: string;
  dates: string;
}

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  partner: string;
  schedules: Schedule[];
  available: boolean;
  registrationUrl?: string;
}

export function CourseCard({
  title,
  description,
  image,
  partner,
  schedules,
  available,
  registrationUrl = '#',
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
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
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

        <p className="text-sm text-blue-600 mb-2 font-medium">{partner}</p>

        {/* HORARIOS */}
        <div className="text-sm text-gray-500 mb-3 space-y-1">
          {schedules.map((schedule) => (
            <p key={schedule.city} className="flex items-center gap-1">
               {schedule.city} · {schedule.days} · {schedule.time}
            </p>
          ))}
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <button
          onClick={() => {
            if (available && registrationUrl !== '#') {
              window.open(registrationUrl, '_blank');
            }
          }}
          disabled={!available}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            available
              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {available ? (
            <>
              Registrarse
              <ExternalLink className="w-4 h-4" />
            </>
          ) : (
            'No disponible'
          )}
        </button>
      </div>
    </motion.div>
  );
}
