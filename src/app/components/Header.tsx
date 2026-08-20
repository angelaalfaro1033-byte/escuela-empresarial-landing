import { motion } from "motion/react";
import { ArrowDown, ExternalLink } from "lucide-react";
import heroImg from "../../assets/images/herox.jpg";
import logoImg from "../../assets/images/logo.png";

const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeyPeZXgeB8SG9DQTxIIK-obHuK_sk6XYGlNwZSoD_t3MnMNg/viewform?usp=header';

export function Header() {
  return (
    <header className="relative min-h-[560px] h-[78svh] text-white overflow-hidden">
      
      {/* Imagen de fondo */}
      <img
        src={heroImg}
        alt="Hero Escuela Empresarial"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/55 to-slate-950/75" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center px-5 sm:px-6 py-16">
        
        {/* Logo */}
        <motion.img
          src={logoImg}
          alt="Logo Escuela Empresarial"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-44 sm:w-52 md:w-64 lg:w-72 mb-6 object-contain"
        />

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl text-base leading-relaxed text-gray-100 sm:text-lg md:text-2xl"
        >
          Explora nuestros cursos y regístrate fácilmente
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#0a3375] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a3375] sm:w-auto"
          >
            Pre-regístrate ahora
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="#cursos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
          >
            Ver cursos
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </header>
  );
}
