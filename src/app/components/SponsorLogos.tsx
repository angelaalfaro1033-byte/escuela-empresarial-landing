import { motion } from 'motion/react';

export function SponsorLogos() {
  const sponsors = [
    { name: 'Masglo', color: 'from-pink-500 to-purple-600' },
    { name: 'Alfaparf', color: 'from-blue-500 to-indigo-600' },
    { name: 'Funse', color: 'from-green-500 to-teal-600' },
    { name: 'Amore e Caffé', color: 'from-amber-600 to-orange-600' },
    { name: 'Mi Dulce Pastel', color: 'from-rose-500 to-pink-600' },
    { name: 'Tres Castillos', color: 'from-yellow-600 to-amber-600' },
    { name: 'Honda Motos', color: 'from-red-600 to-red-700' },
    { name: 'Sempertex', color: 'from-cyan-500 to-blue-600' },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Nuestros Aliados Estratégicos
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            >
              <div className={`bg-gradient-to-br ${sponsor.color} text-white px-4 py-3 rounded-lg font-semibold text-center text-sm`}>
                {sponsor.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
