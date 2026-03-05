import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="relative h-[80vh] min-h-[500px] text-white overflow-hidden">
      
      {/* Imagen de fondo (Hero) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/images/DSC05299.jpg')",
        }}
      />

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* Logo centrado */}
        <motion.img
          src="src/assets/images/ee_white 1.png"
          alt="Logo Escuela Empresarial"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 md:w-64 lg:w-72 mb-6 object-contain"
        />
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          ESCUELA EMPRESARIAL
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-200 max-w-3xl"
        >
          Explora nuestros cursos y regístrate fácilmente
        </motion.p>

      </div>
    </header>
  );
}