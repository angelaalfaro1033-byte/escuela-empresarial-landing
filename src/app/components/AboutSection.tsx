import { motion } from "motion/react";
import aboutImg from "../../assets/images/aboutsection.jpg"; 

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >

          <p className="text-gray-600 mb-6 leading-relaxed">
            La Escuela Empresarial CCI es un programa académico enfocado en el fortalecimiento empresarial,
            diseñado para potenciar los conocimientos y habilidades de los participantes a través de una
            formación a la medida.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Práctica
          </h3>

          <p className="text-gray-600 mb-4 leading-relaxed">
            El programa contiene un ciclo de capacitaciones compuesto por <strong>8 sesiones teórico-prácticas</strong>.
            Cada sesión tiene una duración aproximada de <strong>4 horas</strong>.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✔ Mejorar sus capacidades</li>
            <li>✔ Mejorar sus prácticas</li>
            <li>✔ Mejorar sus productos y servicios</li>
            <li>✔ Elevar su competitividad</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ¿A quiénes va dirigido?
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Empresarios, emprendedores, independientes y personal colaborador
            (operativo) de los establecimientos.
          </p>

          <ul className="space-y-2 text-gray-700 font-semibold">
            <li>✔ Accesible</li>
            <li>✔ Aplicable</li>
          </ul>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex"
        >
          <img
            src={aboutImg}
            alt="Escuela Empresarial"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}