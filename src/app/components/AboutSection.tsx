import { motion } from "motion/react";
import aboutImg from "../../assets/images/aboutsection.jpg"; // usa cualquier imagen que tengas

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Escuela Empresarial CCI
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            La Escuela Empresarial CCI es un programa académico enfocado en el
            fortalecimiento empresarial, diseñado para potenciar los
            conocimientos y habilidades de los participantes a través de una
            formación a la medida:
          </p>

          <ul className="space-y-3 text-gray-700 font-semibold">
            <li>✔ Accesible</li>
            <li>✔ Práctica</li>
            <li>✔ Aplicable</li>
          </ul>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="Escuela Empresarial"
            className="rounded-xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}